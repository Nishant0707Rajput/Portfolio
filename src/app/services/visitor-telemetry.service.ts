import { Injectable } from '@angular/core';
import { API_ROUTES } from '../constants/API_Routes';
import { commonContants } from '../constants/common';

export interface GeoInfo {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  country_code?: string;
  postal?: string;
  latitude?: number;
  longitude?: number;
  isp?: string;
  org?: string;
  timezone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VisitorTelemetryService {
  private readonly SESSION_KEY = 'nr_portfolio_session_notified';

  initiateVisitorTracking(): void {
    // Avoid double firing within the same browser session
    try {
      if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
        return;
      }
      if (sessionStorage.getItem(this.SESSION_KEY)) {
        return;
      }
    } catch {
      // Storage access blocked or restricted
    }

    // Delay slightly to let critical page assets & 3D scene initialize smoothly
    setTimeout(() => {
      this.collectAndSendTelemetry();
    }, 1800);
  }

  private async collectAndSendTelemetry(): Promise<void> {
    try {
      const geo = await this.resolveGeoLocation();
      const payload = this.buildTelemetryPayload(geo);

      const response = await fetch(API_ROUTES.saveUser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': commonContants.API_KEY
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        try {
          sessionStorage.setItem(this.SESSION_KEY, 'true');
        } catch {
          // Ignore storage restrictions
        }
      }
    } catch {
      // Fail silently without disrupting user interface
    }
  }

  private async resolveGeoLocation(): Promise<GeoInfo> {
    // Attempt primary geolocation service: ipwho.is (HTTPS, CORS, no key required)
    try {
      const res = await fetch('https://ipwho.is/', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success !== false) {
          return {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country,
            country_code: data.country_code,
            postal: data.postal,
            latitude: data.latitude,
            longitude: data.longitude,
            isp: data.connection?.isp || data.connection?.org,
            timezone: data.timezone?.id
          };
        }
      }
    } catch {
      // Fallback to secondary
    }

    // Secondary fallback: ipapi.co
    try {
      const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && data.ip) {
          return {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            country_code: data.country_code,
            postal: data.postal,
            latitude: data.latitude,
            longitude: data.longitude,
            isp: data.org,
            timezone: data.timezone
          };
        }
      }
    } catch {
      // Fallback to simple ipify if both rich geo fail
    }

    // Tertiary minimal IP fallback
    try {
      const res = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        return { ip: data.ip };
      }
    } catch {
      // Geolocation completely unavailable
    }

    return { ip: 'Unavailable' };
  }

  private buildTelemetryPayload(geo: GeoInfo): { name: string; email: string; phone: string; description: string } {
    const city = geo.city || 'Unknown City';
    const region = geo.region || '';
    const country = geo.country || 'Global';
    const locationStr = [city, region, country].filter(Boolean).join(', ');
    const ipStr = geo.ip || 'Unknown IP';

    const now = new Date();
    const referrer = typeof document !== 'undefined' && document.referrer ? document.referrer : 'Direct Link / Bookmark';
    const screenRes = typeof window !== 'undefined' && window.screen ? `${window.screen.width}x${window.screen.height}` : 'N/A';
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'Portfolio';

    const description = [
      `🌐 NEW PORTFOLIO VISITOR DETECTED`,
      `----------------------------------------`,
      `📍 Geolocation & Network:`,
      `• IP Address: ${ipStr}`,
      `• Location: ${locationStr}`,
      `• Postal Code: ${geo.postal || 'N/A'}`,
      `• Coordinates: Lat ${geo.latitude || 'N/A'}, Lon ${geo.longitude || 'N/A'}`,
      `• ISP / Network: ${geo.isp || 'N/A'}`,
      `• Timezone: ${geo.timezone || 'N/A'}`,
      ``,
      `💻 Client Environment:`,
      `• Screen Resolution: ${screenRes}`,
      `• Referrer Source: ${referrer}`,
      `• Landing Page: ${currentUrl}`,
      `• User Agent: ${userAgent}`,
      ``,
      `⏱ Event Timestamp:`,
      `• UTC Time: ${now.toISOString()}`,
      `• Local Time: ${now.toLocaleString()}`
    ].join('\n');

    return {
      name: `Visitor (${city}, ${country})`,
      email: 'visitor.telemetry@nishantrajput.dev',
      phone: '+91-9999999999',
      description
    };
  }
}

import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { VisitorTelemetryService } from './services/visitor-telemetry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  constructor(
    private themeService: ThemeService,
    private visitorTelemetry: VisitorTelemetryService
  ) {}

  ngOnInit() {
    this.themeService.setInitialTheme();
    document.body.classList.toggle('dark-mode', this.themeService.darkMode);
    this.visitorTelemetry.initiateVisitorTracking();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    document.body.classList.toggle('dark-mode', this.themeService.darkMode);
  }

}

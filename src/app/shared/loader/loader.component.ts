import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  loader;
  constructor(private _http: HttpService) {
    this._http.loader.subscribe((res) => {
      this.loader = res;
    });
  }
}

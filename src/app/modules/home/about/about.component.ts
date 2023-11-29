import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  logos = [
    "assets/img/svg/node_logo.svg",
    "assets/img/svg/angular_logo.svg",
    "assets/img/svg/express_logo.svg",
    "assets/img/svg/js_logo.svg",
    "assets/img/svg/mysql_logo.svg",
    "assets/img/svg/html_logo.svg",
    "assets/img/svg/css_logo.svg",
    "assets/img/svg/git_logo.svg",
    "assets/img/svg/bootstrap_logo.svg",
    "assets/img/svg/sass_logo.svg",
  ]
}

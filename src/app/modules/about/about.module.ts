import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { HomeModule } from '../home/home.module';
import { AboutComponent } from '../home/about/about.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AboutRoutingModule,HomeModule],
})
export class AboutModule {}

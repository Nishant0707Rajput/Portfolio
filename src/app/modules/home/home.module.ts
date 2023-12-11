import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    AboutComponent,
    AboutComponent,
    ProjectsComponent
  ]
})
export class HomeModule { }

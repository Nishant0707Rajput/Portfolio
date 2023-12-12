import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HomeModule
  ]
})
export class ContactModule { }

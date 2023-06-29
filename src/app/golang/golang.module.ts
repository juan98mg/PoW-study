import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GolangRoutingModule } from './golang-routing.module';
import { GolangComponent } from './golang.component';


@NgModule({
  declarations: [
    GolangComponent
  ],
  imports: [
    CommonModule,
    GolangRoutingModule
  ]
})
export class GolangModule { }

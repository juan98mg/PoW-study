import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowRoutingModule } from './pow-routing.module';
import { PowComponent } from './pow.component';
import { HasherComponent } from '../hasher/hasher.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PowComponent,
    HasherComponent
  ],
  imports: [
    CommonModule,
    PowRoutingModule,
    MatInputModule,
    MatIconModule
  ], 
  exports: [
    HasherComponent
  ]
})
export class PowModule { }

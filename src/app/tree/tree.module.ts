import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { ResizableModule } from 'angular-resizable-element';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    ResizableModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    TreeComponent
  ]
})
export class TreeModule { }

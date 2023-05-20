import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowRoutingModule } from './blockchain-routing.module';
import { BlockchainComponent } from './blockchain.component';
import { HasherComponent } from './hasher/hasher.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BlockchainComponent,
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
export class BlockchainModule { }

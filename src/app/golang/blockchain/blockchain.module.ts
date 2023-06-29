import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockchainRoutingModule } from './blockchain-routing.module';
import { BasicConceptsComponent } from './basic-concepts/basic-concepts.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonConceptsComponent } from './button-concepts/button-concepts.component';
import { HashComponent } from './hash/hash.component';
import { BlockComponent } from './block/block.component';
import { MiningComponent } from './mining/mining.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { CoinComponent } from './coin/coin.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { UnitBlockComponent } from './unit-block/unit-block.component';
@NgModule({
  declarations: [
    BasicConceptsComponent,
    ButtonConceptsComponent,
    HashComponent,
    BlockComponent,
    MiningComponent,
    BlockchainComponent,
    CoinComponent,
    UnitBlockComponent,
  ],
  imports: [
    CommonModule,
    BlockchainRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
  ],
})
export class BlockchainModule {}

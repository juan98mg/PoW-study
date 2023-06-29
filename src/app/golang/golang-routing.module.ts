import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolangComponent } from './golang.component';

const routes: Routes = [
  { path: '', component: GolangComponent },
  {
    path: 'blockchain',
    loadChildren: () =>
      import('./blockchain/blockchain.module').then((m) => m.BlockchainModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GolangRoutingModule {}

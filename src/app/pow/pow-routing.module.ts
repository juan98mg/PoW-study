import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowComponent } from './pow.component';

const routes: Routes = [{ path: '', component: PowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowRoutingModule { }

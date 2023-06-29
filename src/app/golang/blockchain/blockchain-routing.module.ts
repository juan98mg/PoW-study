import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicConceptsComponent } from './basic-concepts/basic-concepts.component';

const routes: Routes = [
  {
    path: 'basic-concepts',
    component: BasicConceptsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockchainRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomComponent } from './components/welcom/welcom.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomComponent, // Redirige a una ruta que no existe
  },
  {
    path: 'golang',
    loadChildren: () =>
      import('./golang/golang.module').then((m) => m.GolangModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

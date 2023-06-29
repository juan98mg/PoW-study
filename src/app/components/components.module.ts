import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomComponent } from './welcom/welcom.component';

@NgModule({
  declarations: [NotFoundComponent, WelcomComponent],
  imports: [CommonModule],
  exports: [NotFoundComponent, WelcomComponent],
})
export class ComponentsModule {}

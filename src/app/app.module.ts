import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp } from 'src/services/assets/initializeIcons';
import { IconLocalRegisterService } from 'src/services/assets/icon-local-register.service';
import { PowModule } from './pow/pow.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './navbar/navbar.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/state';
import { TreeModule } from './tree/tree.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PowModule,
    HttpClientModule,
    NavbarModule,
    TreeModule,
    StoreModule.forRoot(reducers,{
      metaReducers, 
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [IconLocalRegisterService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

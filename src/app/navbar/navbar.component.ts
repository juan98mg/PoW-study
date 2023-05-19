import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state';
import { openMenu } from 'src/state/global/global.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMenuOpen = false;

  constructor(private store: Store<AppState>){

  }

  toggleButton(){
    this.isMenuOpen = !this.isMenuOpen
    this.store.dispatch(openMenu())
  }

}

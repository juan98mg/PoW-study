import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { AppState } from 'src/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'PoW-Study';
  hasOpenedMenu$: Subscription = new Subscription()
  hasOpenedMenu = true;

  constructor(private store: Store<AppState>){

  }


  ngOnInit(): void {
    this.getHasOpenedMenu()
  }
  ngOnDestroy(): void {
    this.hasOpenedMenu$.unsubscribe()
  }


  getHasOpenedMenu(){
    this.hasOpenedMenu$ = this.store
    .select((state) => state.globalConfig.openedMenu)
    .pipe(
      tap((isOpenMenu: boolean) => {
        this.hasOpenedMenu = isOpenMenu
      })
    )
    .subscribe();
  }

  get classDistribution(){
    let classDistribution = 'experience-core'

    if(this.hasOpenedMenu){
      classDistribution += "--with-menu"
    }

    return classDistribution
  }

}

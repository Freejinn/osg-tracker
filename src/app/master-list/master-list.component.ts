import { Component, OnInit, inject } from '@angular/core';
import { PathfinderListService } from './pathfinder-list.service';
import { Observable, tap } from 'rxjs';

import { ScoutGroup, SkillParent } from '../models/skill.model';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService]
})
export class MasterListComponent implements OnInit {

  isLoggedIn$:Observable<boolean>;
  isLoggedOut$:Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    ) {}

    listService = inject(PathfinderListService);

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
    .pipe(select(isLoggedIn));

    this.isLoggedOut$ = this.store
    .pipe(select(isLoggedOut));
  }

  skillsList$: Observable<ScoutGroup[]> = this.listService
  .getSkillsList()
  .pipe(
    tap((res)=> console.log('res', res))
  );

  // string = "camelCaseUtopia"

  // breakCamelCase(string:string) {
  //   // const regex = /[A-Z]/g;
  //   console.log(string.replace(/[A-Z]/g, " $&"));
  // }

  recipe = {
    x: 3,
    y: 2,
    z: 1
  }

  reserves = {
    x: 6,
    y: 2,
    z: 2
  }

  cakes(recipe, reserves) {
    console.log(Object.keys(recipe))
    console.log(Object.values(recipe))
    console.log(Object.keys(reserves))
    console.log(Object.values(reserves))
    console.log(Object.keys(recipe).every(key => reserves.hasOwnProperty(key)))

    if(Object.keys(recipe).every(key => reserves.hasOwnProperty(key))) {
      for(let items of recipe) {
        console.log(items.keys)
      }
    }
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { PathfinderListService } from './pathfinder-list.service';
import { Observable, tap } from 'rxjs';

import { ScoutGroup, SkillParent } from '../models/skill.model';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
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
    private route: Router
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

}

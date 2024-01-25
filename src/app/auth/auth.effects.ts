import { Injectable } from '@angular/core';
import { AuthActions } from './action-types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}

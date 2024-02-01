import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { noop, tap } from 'rxjs';
import { login } from '../auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {


  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router,
  ) {}

    

  loginForm = new FormGroup({
    userName: new FormControl('test user', [Validators.required]),
    password: new FormControl('test password', [Validators.required]),
    osgGroup: new FormControl('100th Sun Mountain'),
  });

  login() {

    const val = this.loginForm.value;
    this.auth.login(val.userName, val.password, val.osgGroup).userList$
    .pipe(
      tap((user)=> {
        console.log(user);
        this.store.dispatch(login({user}));
        this.router.navigateByUrl('/home')
      })
    )
    .subscribe({
      next: noop,
      error: () => alert('Login Failed')
    });

  }
}

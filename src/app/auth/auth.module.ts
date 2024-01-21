import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MasterLoginComponent } from './master-login/master-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    MasterLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer )
  ],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule { }

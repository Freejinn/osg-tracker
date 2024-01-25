import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MasterLoginComponent } from './master-login/master-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer ),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    LoginComponent,
    MasterLoginComponent,
  ],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}

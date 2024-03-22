import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ScoutTroopComponent } from './scout-troop/scout-troop.component';
import { ScoutProgressComponent } from './scout-troop/scout-progress/scout-progress.component';
import { FooterComponent } from './footer/footer.component';
import { ReversePipe } from './reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MasterListModule } from './master-list/master-list.module';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScoutTroopComponent,
    ScoutProgressComponent,
    FooterComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule, 
    NgbTooltip,
    AppRoutingModule, 
    MasterListModule,
    NgbModule,
    HttpClientModule, 
    AuthModule, 
    StoreModule.forRoot(reducers, {
      metaReducers
    }), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), 
    EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

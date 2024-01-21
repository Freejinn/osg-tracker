import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ScoutTroopComponent } from './scout-troop/scout-troop.component';
import { ScoutProgressComponent } from './scout-troop/scout-progress/scout-progress.component';
import { FooterComponent } from './footer/footer.component';
import { ReversePipe } from './reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MasterListModule } from './master-list/master-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScoutTroopComponent,
    ScoutProgressComponent,
    FooterComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule, 
    HttpClientModule, 
    MasterListModule,
    AuthModule, 
    StoreModule.forRoot({}, {}), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

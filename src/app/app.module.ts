import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MasterListComponent } from './master-list/master-list.component';
import { FieldNotesComponent } from './field-notes/field-notes.component';
import { SkillsComponent } from './master-list/skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SkillDetailsComponent } from './master-list/skill-details/skill-details.component';
import { ScoutTroopComponent } from './scout-troop/scout-troop.component';
import { ScoutProgressComponent } from './scout-troop/scout-progress/scout-progress.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MasterListComponent,
    FieldNotesComponent,
    SkillsComponent,
    HomeComponent,
    SkillDetailsComponent,
    ScoutTroopComponent,
    ScoutProgressComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

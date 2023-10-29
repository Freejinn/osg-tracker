import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterListComponent } from './master-list/master-list.component';
import { FieldNotesComponent } from './field-notes/field-notes.component';
import { HomeComponent } from './home/home.component';
import { SkillDetailsComponent } from './master-list/skill-details/skill-details.component';
import { ScoutTroopComponent } from './scout-troop/scout-troop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'master-list', component: MasterListComponent},
  {path: 'field-notes', component: FieldNotesComponent},
  {path: 'skill-details', component: SkillDetailsComponent},
  {path: 'scout-troop', component: ScoutTroopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

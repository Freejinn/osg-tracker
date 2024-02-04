import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterListComponent } from './master-list/master-list.component';
import { SkillDetailsComponent } from './master-list/skill-details/skill-details.component';
import { ScoutTroopComponent } from './scout-troop/scout-troop.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: MasterListComponent},
  {path: 'home', component: MasterListComponent},
  {path: 'master-list', component: MasterListComponent},
  {path: 'skill-details', component: SkillDetailsComponent},
  {path: 'scout-troop', component: ScoutTroopComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

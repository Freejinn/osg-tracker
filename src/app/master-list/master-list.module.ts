import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMasterList from './reducers';
import { SkillsComponent } from './skills/skills.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { PathfinderListService } from './pathfinder-list.service';
import { MasterListComponent } from './master-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  
  imports: [
    CommonModule,
    NgbModule, 
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature(fromMasterList.masterListFeatureKey, fromMasterList.reducers, { metaReducers: fromMasterList.metaReducers })
  ],
  declarations: [
    SkillDetailsComponent, 
    SkillsComponent,
    MasterListComponent],
  exports: [
    SkillDetailsComponent, 
    SkillsComponent, 
    MasterListComponent],
  providers: [PathfinderListService]
})
export class MasterListModule {
 }

import { Component, inject } from '@angular/core';
import { PathfinderListService } from './pathfinder-list.service';
import { Observable, tap } from 'rxjs';

import { SkillParent } from '../models/skill.model';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService]
})
export class MasterListComponent {

  skillParts: number;
  listService = inject(PathfinderListService);

  wolfList$: Observable<SkillParent[]> = this.listService
  .getWolfList()
  .pipe(
    tap((res) => console.log('res', res))
  );

  skillParentList$: Observable<SkillParent[]> = this.listService
    .getPathList()
    .pipe(
      tap((res) => console.log('res', res)));
  
welcome: boolean = true;
otterSkill: boolean = false;
otterButton: boolean = true;
wolfSkill: boolean = false;
wolfButton: boolean = true;
pathfinderSkill: boolean = false;
pathfinderButton: boolean = true;
roverSkill: boolean = false;
roverButton: boolean = true;

showOtterSkills() {
  if (this.otterSkill == false) {
    this.otterSkill = true;
    this.wolfButton = false;
    this.pathfinderButton = false;
    this.roverButton = false;
    this.welcome = false;
  } else {
    this.otterSkill = false;
    this.wolfButton = true;
    this.pathfinderButton = true;
    this.roverButton = true;
    this.welcome = true;
  }
}

  showWolfSkills() {
    if (this.wolfSkill == false) {
      this.wolfSkill = true;
      this.otterButton = false;
      this.pathfinderButton = false;
      this.roverButton = false;
      this.welcome = false;

    } else {
      this.wolfSkill = false;
      this.otterButton = true;
      this.pathfinderButton = true;
      this.roverButton = true;
      this.welcome = true;

    }
  }

  showPathfinderSkills() {
    if (this.pathfinderSkill == false) {
      this.pathfinderSkill = true;
      this.otterButton = false;
      this.wolfButton = false;
      this.roverButton = false;
      this.welcome = false;

    }else {
      this.pathfinderSkill = false;
      this.otterButton = true;
      this.wolfButton = true;
      this.roverButton = true;
      this.welcome = true;

    }
  }

  showRoverSkills() {
    if (this.roverSkill == false) {
      this.roverSkill = true;
      this.otterButton = false;
      this.wolfButton = false;
      this.pathfinderButton = false;
      this.welcome = false;

    } else {
      this.roverSkill = false;
      this.otterButton = true;
      this.wolfButton = true;
      this.pathfinderButton = true;
      this.welcome = true;

    }
  }

  skillSelected() {
    //make it so when one skill category is selected, the others disappear
    //same logic as above
  }



}

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
  
otterSkill: boolean = false;
otterButton: boolean = true;
wolfSkill: boolean = false;
wolfButton: boolean = true;
pathfinderSkill: boolean = false;
pathfinderButton: boolean = true;
roverSkill: boolean = false;
roverButton: boolean = true;

handbookIcon: boolean = true;

showOtterSkills() {
  if (this.otterSkill == false) {
    this.otterSkill = true;
    this.wolfButton = false;
    this.pathfinderButton = false;
    this.roverButton = false;
  } else {
    this.otterSkill = false;
    this.wolfButton = true;
    this.pathfinderButton = true;
    this.roverButton = true;
  }
}

  showWolfSkills() {
    if (this.wolfSkill == false) {
      this.wolfSkill = true;
      this.otterButton = false;
      this.pathfinderButton = false;
      this.roverButton = false;
    } else {
      this.wolfSkill = false;
      this.otterButton = true;
      this.pathfinderButton = true;
      this.roverButton = true;
    }
  }

  showPathfinderSkills() {
    if (this.pathfinderSkill == false) {
      this.pathfinderSkill = true;
      this.otterButton = false;
      this.wolfButton = false;
      this.roverButton = false;
    }else {
      this.pathfinderSkill = false;
      this.otterButton = true;
      this.wolfButton = true;
      this.roverButton = true;
    }
  }

  showRoverSkills() {
    if (this.roverSkill == false) {
      this.roverSkill = true;
      this.otterButton = false;
      this.wolfButton = false;
      this.pathfinderButton = false;
    } else {
      this.roverSkill = false;
      this.otterButton = true;
      this.wolfButton = true;
      this.pathfinderButton = true;
    }
  }

  skillSelected() {
    //make it so when one skill category is selected, the others disappear
    //same logic as above
  }

  scoutGroup = [
    {group: 'Otter',
     url: 'https://docs.guides4guides.org/Timberwolves/Handbook_TWv7_WEB.pdf',
     altSup: '',
     altLink: '',
     route: '',
     color: 'red'
    },
    {group: 'Timberwolf',
     url: 'https://docs.guides4guides.org/Timberwolves/Handbook_TWv7_WEB.pdf',
     altSup: '',
     altLink: '',
     route: '',
     color: 'goldenrod'
    },
    {group: 'Pathfinder',
     url: "https://docs.guides4guides.org/Pathfinders/OSG+Pathfinder+Handbook.pdf",
     altSup: '2022 Proficiency Badges',
     altLink: "https://docs.guides4guides.org/Pathfinders/Pathfinder-Handbook-Preview-June-2022.pdf",
     route: '/master-list',
     color: '#416aed'
    
    },
    {group: 'Rover',
     url: "https://outdoorserviceguides.org/pdf/BPSA-US_Rover_Handbook.pdf",
     altSup: 'Rover Badge Supplement',
     altLink: "https://docs.guides4guides.org/Rovers/Rover+Badge+Supplement.pdf",
     route: '',
      color: 'rgb(35, 58, 42)'
    },
  ]

}

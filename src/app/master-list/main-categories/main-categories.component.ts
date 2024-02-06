import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillParent } from 'src/app/models/skill.model';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent {
@Input() wolfList$: Observable<SkillParent[]>;
@Input() skillParentList$: Observable<SkillParent[]>;

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
}

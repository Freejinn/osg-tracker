import { Component, Input } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { ScoutGroup, SkillBadge, SkillParent } from 'src/app/models/skill.model';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent {
@Input() skillsList$: Observable<ScoutGroup[]>
@Input() wolfList$: Observable<SkillParent[]>;
@Input() skillParentList$: Observable<SkillParent[]>;

@Input() category: SkillParent[]

selectGroup(categ:SkillParent[]) {
  this.category = categ;
  console.log(categ)
}

otterButton: boolean = true;
wolfButton: boolean = true;
pathfinderButton: boolean = true;
roverButton: boolean = true;

// showOtterSkills() {
//   if (this.otterSkill == false) {
//     this.otterSkill = true;
//     this.wolfButton = false;
//     this.pathfinderButton = false;
//     this.roverButton = false;
//     this.welcome = false;
//   } else {
//     this.otterSkill = false;
//     this.wolfButton = true;
//     this.pathfinderButton = true;
//     this.roverButton = true;
//     this.welcome = true;
//   }
// }

//   showWolfSkills() {
//     if (this.wolfSkill == false) {
//       this.wolfSkill = true;
//       this.otterButton = false;
//       this.pathfinderButton = false;
//       this.roverButton = false;
//       this.welcome = false;

//     } else {
//       this.wolfSkill = false;
//       this.otterButton = true;
//       this.pathfinderButton = true;
//       this.roverButton = true;
//       this.welcome = true;

//     }
//   }

//   showPathfinderSkills() {
//     if (this.pathfinderSkill == false) {
//       this.pathfinderSkill = true;
//       this.otterButton = false;
//       this.wolfButton = false;
//       this.roverButton = false;
//       this.welcome = false;

//     }else {
//       this.pathfinderSkill = false;
//       this.otterButton = true;
//       this.wolfButton = true;
//       this.roverButton = true;
//       this.welcome = true;

//     }
//   }

//   showRoverSkills() {
//     if (this.roverSkill == false) {
//       this.roverSkill = true;
//       this.otterButton = false;
//       this.wolfButton = false;
//       this.pathfinderButton = false;
//       this.welcome = false;

//     } else {
//       this.roverSkill = false;
//       this.otterButton = true;
//       this.wolfButton = true;
//       this.pathfinderButton = true;
//       this.welcome = true;

//     }
// }
}

import { Component, Output, EventEmitter, Input } from '@angular/core';

import { SkillParts } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent {
@Input() parts: SkillParts[];
@Output() skillSelected: EventEmitter<SkillParts> = new EventEmitter<SkillParts>();

//   selectedSkillDesc: object;
// private listSub: Subscription;

// constructor(private skillsListService: PathfinderListService) {};

// ngOnInit() {
//   this.listSub = this.skillsListService.skillSelected
//   .subscribe(
//     (genSkills: SkillParent) => {
//       this.selectedSkillDesc = genSkills.description;
//       });
// }

// ngOnDestroy(): void {
//   this.listSub.unsubscribe();
// }

}

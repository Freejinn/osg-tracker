import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PathfinderListService } from '../pathfinder-list.service';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit, OnDestroy {
selectedSkillDesc: object;
private listSub: Subscription;

constructor(private skillsListService: PathfinderListService) {};

ngOnInit() {
  this.listSub = this.skillsListService.skillSelected
  .subscribe(
    (genSkills: Skill) => {
      this.selectedSkillDesc = genSkills.description;
      });
}

ngOnDestroy(): void {
  this.listSub.unsubscribe();
}

}

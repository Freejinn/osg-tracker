import { Component, inject } from '@angular/core';
import { PathfinderListService } from './pathfinder-list.service';
import { Observable, tap } from 'rxjs';

import { SkillParent } from '../models/skill.model';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService],
})
export class MasterListComponent {
  skillParts: number;
  listService = inject(PathfinderListService);

  skillParentList$: Observable<SkillParent[]> = this.listService
    .getList()
    .pipe(tap((res) => console.log('res', res)));
  
    //This creates property that retrieves the list from service.
  //In html, this prop is used to loop through the parent categories
  //and, in the dropdown, to loop through the different skills.
  //Also, this nifty console log outputs the data from parent list.
  //All looks good.

  // onBadgeSelected(skill: SkillBadge) {
  //   this.skillParts = skill.parts.length;
  //   console.log(this.skillParts);
  // }

  onSkillsSelected() {}
}

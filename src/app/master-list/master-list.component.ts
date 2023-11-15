import { Component, inject } from '@angular/core';
import { SkillParent } from '../models/skill.model';
import { PathfinderListService } from './pathfinder-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService]
})

export class MasterListComponent {
  listService = inject(PathfinderListService);

  skillParentList: Observable<SkillParent[]> = this.listService.getList();

  // handlePartSelection(part: SkillPart) {
  //   this.listService.updateListItem(part);
  // }
}

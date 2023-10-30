import {Component, inject, OnInit} from '@angular/core';
import {Skill, SkillPart} from '../models/skill.model';
import { PathfinderListService } from './pathfinder-list.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService]
})

export class MasterListComponent {
  listService = inject(PathfinderListService);

  skillParentList: Observable<ParentSkill[]> = this.listService.getList();

  handlePartSelection(part: SkillPart) {
    this.listService.updateListItem(part);
  }
}

import {Component, inject} from '@angular/core';
import {SkillParent, SkillPart} from '../models/skill.model';
import { PathfinderListService } from './pathfinder-list.service';
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService]
})

export class MasterListComponent {
  listService = inject(PathfinderListService);

  skillParentList$: Observable<SkillParent[]> = this.listService.getList().pipe(tap(res => console.log('res: ', res)));

  handlePartSelected(part: SkillPart, parent: SkillParent) {
    this.listService.updatePart(part, parent.id);
  }
}

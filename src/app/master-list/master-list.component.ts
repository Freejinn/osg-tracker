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
  

  onSkillsSelected() {}
}

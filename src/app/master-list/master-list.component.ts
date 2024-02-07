import { Component, inject } from '@angular/core';
import { PathfinderListService } from './pathfinder-list.service';
import { Observable, tap } from 'rxjs';

import { ScoutGroup, SkillParent } from '../models/skill.model';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService]
})
export class MasterListComponent {

  listService = inject(PathfinderListService);

  skillsList$: Observable<ScoutGroup[]> = this.listService
  .getSkillsList()
  .pipe(
    tap((res)=> console.log('res', res))
  );

  skillParentList$: Observable<SkillParent[]> = this.listService
    .getPathList()
    .pipe(
      tap((res) => console.log('res', res)));

  skillGroup$: Observable<ScoutGroup[]> 

}

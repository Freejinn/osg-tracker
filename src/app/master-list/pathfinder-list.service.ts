import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillParent } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class PathfinderListService {
  
  http = inject(HttpClient);

  getList(): Observable<SkillParent[]> {
  return this.http.get<SkillParent[]>('http://localhost:3000/skills');

  }
    // @Input() badgeSelected: EventEmitter<SkillBadge>;

}

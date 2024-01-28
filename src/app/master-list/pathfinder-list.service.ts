import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SkillParent } from '../models/skill.model';
import { skillsConst } from 'src/assets/Constants/skills.const';

@Injectable({ providedIn: 'root' })
export class PathfinderListService {
  
  http = inject(HttpClient);

  getList(): Observable<SkillParent[]> {
    return of(skillsConst) 
  
  // return this.http.get<SkillParent[]>('http://localhost:3300/skills');

  }
    // @Input() badgeSelected: EventEmitter<SkillBadge>;

}
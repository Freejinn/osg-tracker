import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ScoutGroup, SkillParent } from '../models/skill.model';
import { groupSkillsConst, skillsConst, wolfConst } from 'src/assets/Constants/skills.const';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PathfinderListService {
  
  http = inject(HttpClient);

  getSkillsList(): Observable<ScoutGroup[]>{
    return of(groupSkillsConst)
  };

  getPathList(): Observable<SkillParent[]> {
    return of(skillsConst);
    
  // return this.http.get<SkillParent[]>('http://localhost:3300/skills');

  }
  
}

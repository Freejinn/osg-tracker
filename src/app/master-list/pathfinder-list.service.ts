import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ScoutGroup } from '../models/skill.model';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PathfinderListService {
  
  http = inject(HttpClient);

  // getSkillsList(): Observable<ScoutGroup[]>{
  //   return of(groupSkillsConst)
  // };

  getSkillsList(): Observable<ScoutGroup[]> {
    return this.http.get<ScoutGroup[]>('http://localhost:3300/skills');

  }
  
}

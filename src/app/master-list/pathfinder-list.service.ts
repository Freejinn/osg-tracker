import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SkillParent } from '../models/skill.model';
import { skillsConst } from '../../assets/Constants/skills.const'

@Injectable({providedIn: 'root'})
export class PathfinderListService {
  getList(): Observable<SkillParent[]> {
    return of(skillsConst);
  }
}


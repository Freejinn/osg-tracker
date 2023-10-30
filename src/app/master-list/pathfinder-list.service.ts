import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

import {Skill, SkillParent} from '../models/skill.model';
import {skillParents, skillsConst} from "../../assets/constants/skills.const";

@Injectable({providedIn: 'root'})
export class PathfinderListService {
  skillSelected = new Subject<Skill>();

  getList(): Observable<SkillParent[]> {
    return of(skillsConst);
  }

  updateBadgePercentage(id: string): SkillParent {

  }
}

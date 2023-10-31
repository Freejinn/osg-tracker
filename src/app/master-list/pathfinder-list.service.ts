import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {SkillBadge, SkillParent, SkillPart} from '../models/skill.model';
import {skillsConst} from "../../assets/constants/skills.const";

@Injectable({providedIn: 'root'})
export class PathfinderListService {
  // skillSelected = new Subject<Skill>();

  getList(): Observable<SkillParent[]> {
    return of(skillsConst);
  }

  updatePart(part: SkillPart, parentId: string): void {

  }
}

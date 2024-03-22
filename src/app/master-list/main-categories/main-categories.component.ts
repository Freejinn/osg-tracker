import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { ScoutGroup, SkillBadge, SkillParent } from 'src/app/models/skill.model';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css'],
})
export class MainCategoriesComponent {
  hideSkills: boolean = true;
  hideBadges: boolean = true;
  groupName: string;
  groupColor: string;
  groupUrl: string;
  skillsList: boolean;
  category: SkillParent[];
  badgeList: boolean;
  badge: SkillBadge[];
  hidden: boolean;
  skillName: string;
  skillColor: string;



  @Input() skillsList$: Observable<ScoutGroup[]>;

  selectGroup(categ: SkillParent[]) {
    this.category = categ;
    this.hideSkills = false;
    console.log(categ);
    this.skillsList = true;
  }

  groupSelected(group: ScoutGroup) {
    this.groupName = group.label;
    this.groupColor = group.backgroundColor;
    this.groupUrl = group.handbookUrl;
  }

  selectSkill(oneSkill: SkillBadge[]) {
    this.badge = oneSkill;
    console.log(oneSkill)
    this.badgeList = !this.badgeList; //close toggle
    this.hideBadges = false;
  }

  skillSelected(skill: SkillParent) {
    this.skillName = skill.label;
    this.skillColor = skill.backgroundColor;
    this.skillsList = false;
  }

  closeSkills() {
    this.skillsList = false;
    this.hideSkills = true;
    this.hideBadges = true;
  }

  closeBadges() {
    this.badgeList = false;
    this.skillsList = true;
    this.hideBadges = true;
  }


 
  }


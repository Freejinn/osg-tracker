import { Component, Input } from '@angular/core';

import { SkillBadge, SkillParts } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {

  @Input() skill: SkillBadge;
  @Input() parts: SkillParts[] = [];
  badge: SkillBadge[] = [];

  selectedParts = [];
  totalParts: number;
  trueParts: number;
  percentage: number;

  updateSelectStatus(part: SkillParts) {
    let index = this.parts.indexOf(part);
    part.selected = !part.selected ? true : false;
    this.parts[index] = part;

    part.selected.valueOf() == true
      ? this.selectedParts.push(part.selected)
      : this.selectedParts.pop();
    this.trueParts = this.selectedParts.length;
    console.log(this.trueParts);
  }

  selectBadge(skill: SkillBadge) {
    this.totalParts = skill.parts.length;
    console.log(this.totalParts);
  }

  updateProgPercent(percent: SkillBadge) {
    let index = this.badge.indexOf(percent);
    percent.progressPercentage = this.trueParts / this.totalParts;
    this.badge[index] = percent;
    this.percentage = percent.progressPercentage;
    console.log(this.percentage);
  }
}

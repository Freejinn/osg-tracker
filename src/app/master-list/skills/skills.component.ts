import { Component, EventEmitter, Input, Output } from '@angular/core';

import {SkillBadge, SkillParts } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skill: SkillBadge;
  @Output() partSelected = new EventEmitter<SkillParts>()

}

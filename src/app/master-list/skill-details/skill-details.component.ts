import { Component, Output, EventEmitter, Input } from '@angular/core';

import { SkillParts } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css'],
})
export class SkillDetailsComponent {
  @Input() parts: SkillParts[];
  @Output() skillSelected = new EventEmitter<SkillParts>();

  selectPart(part: SkillParts) {
    this.skillSelected.emit(part);
  }
}

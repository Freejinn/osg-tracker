import {Component, Output, EventEmitter, Input} from '@angular/core';
import {SkillPart} from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent {
  @Input() parts: SkillPart[];
  @Output() skillSelected: EventEmitter<SkillPart> = new EventEmitter<SkillPart>();
}

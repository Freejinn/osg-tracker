import {Component, OnInit, OnDestroy, Output, EventEmitter, Input} from '@angular/core';
import { Subscription } from 'rxjs';

import { PathfinderListService } from '../pathfinder-list.service';
import {Skill, SkillBadge, SkillPart} from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent {
  @Input() parts: SkillPart[];
  @Output() skillSelected: EventEmitter<SkillPart> = new EventEmitter<SkillPart>();
}

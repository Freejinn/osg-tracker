import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Skill, SkillBadge, SkillPart} from 'src/app/models/skill.model';
import { PathfinderListService } from '../pathfinder-list.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skill: SkillBadge;
  @Output() partSelected = new EventEmitter<SkillPart>()
  percentage: number;

  ngOnInit(): void {
    this.percentage = for
  }

  handleSelection(badge: SkillPart) {
    // emit an event to update skill badge data
  }
}

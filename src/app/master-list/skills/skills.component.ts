import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { PathfinderListService } from '../pathfinder-list.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skills: Skill;

  constructor(private skillsListService: PathfinderListService) {};

  onSelected() {
    this.skillsListService.skillSelected.next(this.skills);
  }

}

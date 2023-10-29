import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';
import { PathfinderListService } from './pathfinder-list.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  providers: [PathfinderListService]
})

export class MasterListComponent implements OnInit {
  genSkills: Skill[];
  outdoorSkills: Skill[];
  civicSkills: Skill[];
  creativeSkills: Skill[];
  lifeSkills: Skill[];

  constructor(private skillsListService: PathfinderListService ) {};

  ngOnInit() {
    this.genSkills = this.skillsListService.getGenSkills();
    this.outdoorSkills = this.skillsListService.getOutdoorSkills();
    this.civicSkills = this.skillsListService.getCivicSkills();
    this.creativeSkills = this.skillsListService.getCreativeSkills();
    this.lifeSkills = this.skillsListService.getLifeSkills();
  }
}

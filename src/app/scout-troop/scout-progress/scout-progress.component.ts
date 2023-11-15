import { Component, OnInit } from '@angular/core';

import { SkillParent } from 'src/app/models/skill.model';
// import { PathfinderListService } from 'src/app/master-list/pathfinder-list.service';


@Component({
  selector: 'app-scout-progress',
  templateUrl: './scout-progress.component.html',
  styleUrls: ['./scout-progress.component.css']
})
export class ScoutProgressComponent implements OnInit {
  genSkills: SkillParent[];

  // constructor(private skillsListService: PathfinderListService ) {};


  ngOnInit(): void {
    // this.genSkills = this.skillsListService.getGenSkills();
  }

}

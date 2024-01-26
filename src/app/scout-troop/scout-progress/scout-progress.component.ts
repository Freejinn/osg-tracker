import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SkillParent } from 'src/app/models/skill.model';
import { PathfinderListService } from 'src/app/master-list/pathfinder-list.service';


@Component({
  selector: 'app-scout-progress',
  templateUrl: './scout-progress.component.html',
  styleUrls: ['./scout-progress.component.css']
})
export class ScoutProgressComponent implements OnInit {
  genSkills: Observable<SkillParent[]>;

  constructor(private skillsListService: PathfinderListService ) {};


  ngOnInit() {
    // this.genSkills = this.skillsListService.getList();
  }

}

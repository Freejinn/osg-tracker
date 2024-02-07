import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { ScoutGroup, SkillParent } from 'src/app/models/skill.model';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent {
hide: boolean = true;
groupName: string;
groupColor: string;
groupUrl:string;
skillsList:boolean;

@Output() selectedGroup: EventEmitter<any> = new EventEmitter();
@Input() skillsList$: Observable<ScoutGroup[]>
@Input() category: SkillParent[]


selectGroup(categ:SkillParent[]) {
  this.category = categ;
  this.hide = false;
  console.log(categ)
  this.skillsList = true;
}

groupSelected(group:any){
this.selectedGroup.emit(group);
this.groupName = group.label;
this.groupColor = group.backgroundColor;
this.groupUrl = group.handbookUrl;
}

close(){
  this.skillsList = false;
  this.hide = true;
}

}
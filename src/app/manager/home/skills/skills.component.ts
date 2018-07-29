import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../shared/skill.model';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { TeamService } from '../team.service';
import { Team } from '../../../shared/team.model';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skill[] = [
    new Skill('S1',0,'Functional'),
    new Skill('S2',0,'Functional'),
    new Skill('S3',0,'Technical'),
    new Skill('S1',0,'Technical'),
    new Skill('S1',0,'Process')
  ];

  team : Team ;
  constructor(private teamService : TeamService,
              private mService : ManagerService) { }

  ngOnInit() {
    this.team = this.teamService.getTeam();
    this.skills = this.team.skills;
    console.log(this.team.skills);
    this.mService.skillListChanged.subscribe(
      (skills : Skill[]) => {
        this.skills = skills;
      }
    );
  }

  onAddSkill(form : NgForm){
    const value = form.value;
    var skill : Skill = new Skill(value.sname,0,value.stype);
    console.log(skill);
    this.mService.addSkill(skill,this.team.id);
  }

}

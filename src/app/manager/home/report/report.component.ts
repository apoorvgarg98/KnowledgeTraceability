import { Component, OnInit } from '@angular/core';
import { Team } from '../../../shared/team.model';
import { TeamService } from '../team.service';
import { Skill } from '../../../shared/skill.model';
import { Employee } from '../../../shared/employee.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  team : Team;
  checkVal : boolean = false;
  stypes = ['Functional','Technical','Infrastructure','Process','Guidelines'];
  skills : Skill[];
  employees : Employee[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.team = this.teamService.getTeam();
    this.skills = this.team.skills;
    this.employees = this.team.employees;
    for(var i=0;i<this.employees.length;i++){
      if(this.employees[i].validated != 2){
        this.checkVal = true;
        break;
      }
    }
    var len = this.employees.length;
    if(!this.checkVal){
      for(var i=0;i<this.skills.length;i++){
        for(var j=0;j<len;j++)
          this.skills[i].rating += this.employees[j].skills[i].rating;
        this.skills[i].rating *= (20/len);   
      }
    }

  }

}

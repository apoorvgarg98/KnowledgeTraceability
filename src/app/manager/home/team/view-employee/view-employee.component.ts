import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Employee } from '../../../../shared/employee.model';
import { ManagerService } from '../../../manager.service';
import { TeamService } from '../../team.service';
import { Skill } from '../../../../shared/skill.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeId : string;
  employee : Employee;
  stypes = ['Functional','Technical','Infrastructure','Process','Guidelines'];
  skills : Skill[];
  status : boolean = false;

  constructor(private route : ActivatedRoute,
              private mService : ManagerService,
              private teamService : TeamService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.employeeId = params['employeeId'];
        this.employee =  this.mService.getEmployee(this.employeeId,this.teamService.getTeam().id);
        this.skills = this.employee.skills;
        this.status = false;
      }
    );
    this.mService.statusUpdate.subscribe(
      () => this.status = true
    );
  }

  validate(ValStatus : number){
    this.status = false;
    var id = this.teamService.getTeam().id; 
    this.mService.updateValidate(id,this.employee.id,ValStatus);
  }
}

import { Component, OnInit } from '@angular/core';

import { Team } from '../../../shared/team.model';
import { Employee } from '../../../shared/employee.model';
import { ManagerService } from '../../manager.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
 
  id : string;
  team : Team;
  employees : Employee[];

  constructor(private mService: ManagerService,
              private teamService : TeamService) { }

  ngOnInit() {
    this.team = this.teamService.getTeam();
    this.employees = this.team.employees;
    this.teamService.teamChanged.subscribe(
      (team : Team) => {
        this.team = team;
        this.employees = this.team.employees;
      }
    );

    this.mService.employeeListChanged.subscribe(
      (employees : Employee[]) => {
        this.employees = employees;
      }
    );
  }

}

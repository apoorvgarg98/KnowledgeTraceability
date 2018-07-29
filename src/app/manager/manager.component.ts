import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from '../shared/team.model';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers : [ManagerService]
})
export class ManagerComponent implements OnInit {

  teams : Team[];

  constructor(private mService : ManagerService,
              private router : Router) { 
  }

  ngOnInit() {
    this.teams = this.mService.getTeams();
    this.mService.teamListChanged.subscribe(
      (teams : Team[]) => {
        this.teams = teams;
        this.router.navigate(['manager',teams[teams.length-1].id]);
      }
    );
    this.mService.teamListUpdated.subscribe(
      (teams : Team[]) => {
        this.teams = teams;
      }
    );
  }

}

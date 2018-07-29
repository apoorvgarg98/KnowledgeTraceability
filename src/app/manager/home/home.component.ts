import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ManagerService } from '../manager.service';
import { Team } from '../../shared/team.model';
import { TeamService } from './team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TeamService]
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private mService : ManagerService,
              private teamService : TeamService) { }

  id : string;
  team : Team;

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = params['id'];
        this.team = this.mService.getTeam(this.id);
        this.teamService.setTeam(this.team);
      }
    );
  }

}

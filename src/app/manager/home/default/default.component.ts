import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Team } from '../../../shared/team.model';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private mService : ManagerService) { }

id : string;
team : Team;

ngOnInit() {
this.route.params.subscribe(
(params : Params) => {
this.id = params['id'];
this.team = this.mService.getTeam(this.id);
}
);
}

}

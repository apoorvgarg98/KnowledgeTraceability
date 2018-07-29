import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../shared/team.model';

@Component({
  selector: 'app-teamlist-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.css']
})
export class TeamListItemComponent implements OnInit {

  @Input() team : Team;

  constructor() { }

  ngOnInit() {
  }

}

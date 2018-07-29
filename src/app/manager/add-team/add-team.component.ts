import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../../shared/team.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  @ViewChild('f') form : NgForm;

  constructor(private mService: ManagerService) { }

  ngOnInit() {
  }

  onAddTeam(){
    const value = this.form.value ;
    const team = new Team('123',value.name,value.department,value.description,[],[]);
    this.mService.addTeam(team);    
  }

}

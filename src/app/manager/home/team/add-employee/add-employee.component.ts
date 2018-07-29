import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from '../../../../shared/employee.model';
import { TeamService } from '../../team.service';
import { ManagerService } from '../../../manager.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(private teamService : TeamService,
              private mService: ManagerService,
              private router : Router) { }

  ngOnInit() {
  }

  onAddEmployee(){
    const value = this.form.value;
    const employee = new Employee(value.employeeId, value.name,[]);
    this.mService.addEmployee(employee,this.teamService.getTeam().id);
    this.router.navigate['./'];
  }

}

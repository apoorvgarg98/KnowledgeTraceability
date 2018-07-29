import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { SignInService } from '../sign-in/sign-in.service';
import { Skill } from '../shared/skill.model';
import { EmployeeService } from './employee.service';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers : [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employee : Employee;
  disableInput : number = 1;
  change : boolean = false;
  id : string;
  skills : Skill[] = []; 
 
  stypes = ['Functional','Technical','Infrastructure','Process','Guidelines'];

  constructor(private signInService : SignInService,
              private empService : EmployeeService) { }

  ngOnInit() {
    var user = this.signInService.getEmployee();
    this.employee = user.employees[0];
    this.id = user._id;
    this.empService.getSkills(this.id);
    this.empService.skillsUpdated.subscribe(
      (skills : Skill[]) => {
        this.skills = skills;
        for(var i=0;i<this.skills.length;i++){
          for(var j=0;j<this.employee.skills.length;j++){
            if(this.skills[i].name === this.employee.skills[j].name && 
                this.skills[i].skillType === this.employee.skills[j].skillType )
                this.skills[i].rating = this.employee.skills[i].rating; 
          }
        }
      }
    );
    
    this.disableInput = this.employee.validated;
    this.empService.changeSaved.subscribe(
      () => {this.change = true}
    );
  }

  onSubmit(form : NgForm){
    this.employee.skills = this.skills;
    this.empService.updateEmployee(this.id, this.employee);
  }

}

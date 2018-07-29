import { Component, ViewChild } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

import { SignInService } from './sign-in.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  @ViewChild('manager') mform : NgForm;
  @ViewChild('employee') eform : NgForm;

  errorMess : boolean = false;                      //manager form
  errorMessEmp : boolean = false;                   //employee form

  constructor(private signIn : SignInService,
              private router : Router){}

  onManagerSignIn(form : NgForm){
    const value = this.mform.value;
    var user;
    this.signIn.signInManager(value.username,value.pass).subscribe(
      (response) =>{
          user = response.json();
          if(user==null){
            this.errorMess = true;
          }
          else{
            this.signIn.setUser(user);
            this.router.navigate(['/manager']);
          }
        }
  );
    
  }

  onEmployeeSignIn(form : NgForm){
    const value = this.eform.value;
    var employee;
    this.signIn.signInEmployee(value.teamId,value.employeeId).subscribe(
      (response) => {
        employee = response.json();
        if(employee[0] == null){
          this.errorMessEmp = true ;
        }
        else{
          this.signIn.setEmployee(employee[0]);
          this.router.navigate(['/employee']);
        }
      }
    );

  }
}
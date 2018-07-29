import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SignInService } from '../../sign-in/sign-in.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Input() user : string;

  constructor(private signInService : SignInService,
              private router : Router) { }

  ngOnInit() {
  }

  onLogout(){
    if(this.user === "manager"){
      this.signInService.logoutUser();
    }
    else if(this.user === "employee"){
      this.signInService.logoutEmployee();
    }
    this.router.navigate(['']);
  }

}

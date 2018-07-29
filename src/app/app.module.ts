import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TeamListItemComponent } from './manager/team-list-item/team-list-item.component';
import { HomeComponent } from './manager/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './manager/home/team/team.component';
import { SkillsComponent } from './manager/home/skills/skills.component';
import { ReportComponent } from './manager/home/report/report.component';
import { HeaderComponent } from './manager/home/header/header.component';
import { AddTeamComponent } from './manager/add-team/add-team.component';
import { DefaultComponent } from './manager/home/default/default.component';
import { AddEmployeeComponent } from './manager/home/team/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './manager/home/team/view-employee/view-employee.component';
import { HeadComponent } from './shared/head/head.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { SignInService } from './sign-in/sign-in.service';
import { AuthGuard } from './auth-guard.service';
import { EmpAuthGuard } from './emp-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    EmployeeComponent,
    SignInComponent,
    DropdownDirective,
    TeamListItemComponent,
    HomeComponent,
    TeamComponent,
    SkillsComponent,
    ReportComponent,
    HeaderComponent,
    AddTeamComponent,
    DefaultComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SignInService,AuthGuard,EmpAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

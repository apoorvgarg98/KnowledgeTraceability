import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ManagerComponent } from "./manager/manager.component";
import { HomeComponent } from "./manager/home/home.component";
import { TeamComponent } from "./manager/home/team/team.component";
import { SkillsComponent } from "./manager/home/skills/skills.component";
import { ReportComponent } from "./manager/home/report/report.component";
import { AddTeamComponent } from "./manager/add-team/add-team.component";
import { DefaultComponent } from "./manager/home/default/default.component";
import { AddEmployeeComponent } from "./manager/home/team/add-employee/add-employee.component";
import { ViewEmployeeComponent } from "./manager/home/team/view-employee/view-employee.component";
import { EmployeeComponent } from "./employee/employee.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { AuthGuard } from "./auth-guard.service";
import { EmpAuthGuard } from "./emp-auth-guard.service";

const appRoutes : Routes = [
    { path : '', component : SignInComponent},
    { path : 'manager',component : ManagerComponent,
     canActivate : [AuthGuard] , 
    children : [
        {path : 'add-team', component : AddTeamComponent},
        {path : '', component : HomeComponent},
        {path : ':id', redirectTo:':id/home' },
        {path : ':id/home', component : HomeComponent, children :[ 
            {path : '', component : DefaultComponent},
            {path : 'team', component : TeamComponent ,children : [
                {path : 'add-employee', component : AddEmployeeComponent},
                {path : ':employeeId', component : ViewEmployeeComponent}
            ]},
            {path : 'skills', component : SkillsComponent },
            {path : 'report', component : ReportComponent }
        ] }
    ] },
    { path : 'employee', component : EmployeeComponent 
        ,canActivate : [EmpAuthGuard]
    }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule{
}
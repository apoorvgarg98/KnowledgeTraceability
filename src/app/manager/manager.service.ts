import { EventEmitter, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Team } from "../shared/team.model";
import { Employee } from "../shared/employee.model";
import { Skill } from "../shared/skill.model";

@Injectable()
export class ManagerService{

    constructor(private http : Http){}

    teamListChanged = new EventEmitter<Team[]>();
    teamListUpdated = new EventEmitter<Team[]>();
    employeeListChanged = new EventEmitter<Employee[]>();
    skillListChanged = new EventEmitter<Skill[]>();
    statusUpdate = new EventEmitter();

    teams : Team[] = [];

    getTeams(){
        this.http.get('/team_api/teams').subscribe(
            (response : Response) => {
                var temp = response.json();
                var teams1: Team[] = [] ;
                for( var i =0;i< temp.length;i++){
                    teams1[i] =new Team(temp[i]._id,temp[i].name,temp[i].department,temp[i].description,temp[i].skills,temp[i].employees);
                }
                this.teams = teams1;
                this.teamListUpdated.emit(this.teams.slice());
            }
        );
        return this.teams.slice();
    }

    getTeam(id : string){
        for(var i=0; i<this.teams.length; i++){
            if(this.teams[i].id === id){
                return this.teams[i];
            }
        }
        return ;
    }

    addTeam(team : Team){
        this.http.post('/team_api/addTeam',team).subscribe(
            (response) => {
                if(response.json()){
                    var t =  response.json();
                    console.log(t);
                    this.teams.push(new Team(t._id,t.name,t.department,t.description,t.skills,t.employees));
                    this.teamListChanged.emit(this.teams.slice());
                }
            }
        );
    }

    addSkill(skill : Skill,id : string){
        this.http.post('/team_api/addSkill',{id : id,skill : skill}).subscribe(
            (response) => {
                if(response.json()){
                    var i=0;
                    for(i;i<this.teams.length;i++){
                        if(this.teams[i].id === id)
                        break;
                    }
                    this.teams[i].skills.push(skill);
                    this.skillListChanged.emit(this.teams[i].skills.slice());
                 
                }
            }
        );
    }

    addEmployee(employee : Employee,id : string){
        this.http.post('/team_api/addEmployee',{id : id, employee : employee}).subscribe(
            (response) => {
                if(response.json()){
                    var i=0;
                    for(i;i<this.teams.length;i++){
                        if(this.teams[i].id === id)
                        break;
                    }
                    this.teams[i].employees.push(employee);
                    this.employeeListChanged.emit(this.teams[i].employees.slice());
                }
            }
        );
    }

    getEmployee(employeeId : string, id : string){
        var i=0;
        for(i;i<this.teams.length;i++){
            if(this.teams[i].id === id)
            break;
        }
        var j=0;
        for(j;j<this.teams[i].employees.length;j++){
            if(this.teams[i].employees[j].id === employeeId)
            break;
        }
        return this.teams[i].employees[j];
    }

    getEmployees(id : string){
        var i=0;
        for(i;i<this.teams.length;i++){
            if(this.teams[i].id === id)
            break;
        }
        return this.teams[i].employees;
    }

    updateValidate(id : string,employeeId : string,status : number){
        this.http.post('/team_api/updateValidate',{id : id, employeeId : employeeId,status : status})
        .subscribe(
            (response : Response) => {
                var res = response.json();
                if(res.updateStatus == true){
                    var i=0;
                    for(i;i<this.teams.length;i++){
                        if(this.teams[i].id === id)
                        break;
                    }
                    var j=0;
                    for(j;j<this.teams[i].employees.length;j++){
                        if(this.teams[i].employees[j].id === employeeId)
                        break;
                    }
                    this.teams[i].employees[j].validated = status;
                    this.statusUpdate.emit();
                }   
            }
        );
    }
}
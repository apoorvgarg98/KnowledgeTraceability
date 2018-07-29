import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http"; 

@Injectable()
export class SignInService{

    private user : any;
    private employee : any;
    
    constructor(private http : Http){}

    signInManager(username : string , password : string){
        return this.http.post("/team_api/managerLogin",{username : username , password : password});
    }

    getUser(){
        return this.user;
    }
    setUser(user : any){
        this.user = user;
    }

    logoutUser(){
        this.user = null;
    }

    signInEmployee(id : string , employeeId : string){
        return this.http.post("/employee_api/employeeLogin",{id : id , employeeId : employeeId});
    }

    getEmployee(){
        return this.employee;
    }

    setEmployee(employee : any){
      this.employee = employee;  
    }

    logoutEmployee(){
        this.employee = null;
    }
}
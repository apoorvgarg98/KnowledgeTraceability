import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SignInService } from './sign-in/sign-in.service';

@Injectable()
export class EmpAuthGuard implements CanActivate{

    constructor(private sService : SignInService ,
                private router : Router ){}

    canActivate(route: ActivatedRouteSnapshot
              , state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        if(this.sService.getEmployee())
            return true;
        else{
            this.router.navigate(['/']);
        }
    }
}
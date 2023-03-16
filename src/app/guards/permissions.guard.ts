import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificationService } from '../Services/autentification/autentification.service';


@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private loginPrd:AutentificationService, private router:Router){
  }
  canActivate():boolean{
    const token = localStorage.getItem('token');
    if(token == undefined){
      this.router.navigate(['/login'])
      return false

    }
    return true
  }
  
}

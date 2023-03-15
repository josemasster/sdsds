import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificationService } from '../Services/autentification/autentification.service';


@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private loginPrd:AutentificationService){
  }
  canActivate():boolean{
    return this.loginPrd.habilitarlogueo();
  }
  
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MeService} from 'src/app/services/me.service';
import {LoginComponent} from 'src/app/views/login/login.component'

@Injectable({
  providedIn: 'root'
})
export class UnauthenticatedGuard implements CanActivate {

  constructor (private meService: MeService, private router: Router) {}
  async canActivate () {
    if (!this.meService.resove1()) 
       return this.router.navigate(['login']);
    return true;
  }
}

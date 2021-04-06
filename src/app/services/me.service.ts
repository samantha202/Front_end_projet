import { Injectable, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class MeService{
 private me: undefined|null|Utilisateur;
  constructor() { 
    this.me = undefined;
  }
   async resove(users:Utilisateur){
     this.me = users;
  }
    resove1(){
    if(this.me != undefined)
    return true;
    else
     return false;
  }
}

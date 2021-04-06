import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import {AuthentificationService} from 'src/app/services/authentification.service';
import {MeService} from "src/app/services/me.service";
import {SessionStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errors: string[] = [];
  u : Utilisateur[] | undefined;
  users: undefined|null|Utilisateur;
   constructor(
    private router : Router,
    private user :AuthentificationService,
    private session: SessionStorageService,
    private me:MeService) 
  {
  }
  ngOnInit() {
    this
  }
  async checkUser()
  {
    this.users = await this.user.getUserPL(this.email,this.password).toPromise();
    this.me.resove(this.users);
    try{
      this.errors = [];
    if(this.users[0].password === this.password && this.users[0].email === this.email)
    {
      this.session.store("nom",this.users[0].nom);
      this.session.store("prenom",this.users[0].prenom);
      this.session.store("email",this.users[0].email);
      console.log("my result  ",this.users[0].email);
      this.router.navigate(['/search']);
    }
    }catch(err)
    {
      this.errors = ['Votre login ou votre password est incorrect'];
      throw err;
      this.errors = [];
   }
   return this.users;
 }
}

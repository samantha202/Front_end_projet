import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import {AuthentificationService} from 'src/app/services/authentification.service'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errors = [''];
  u : Utilisateur[] | undefined;
  submitted: any;
  AdresseClientI : any;
  AdresseClientB : any;

  constructor(
    private router : Router,
    private user :AuthentificationService) 
    {
    }

  ngOnInit() {
    this
  }
  
  CheckUser()
  {
    
  this.user.getUserPL(this.email,this.password)
  .pipe(first()).subscribe(
    user => {
      if(user.password === "")
      {
        this.errors = ['your login or your password it is not correct'];
      }else
      { 
        let result : any;
        result = JSON.stringify(user);
        //resut as Utilisateur;
        console.log("my result  "+result);
        this.router.navigate(['/search']);
      }
    },
    error =>
    { 
      this.errors = ['your login or your password it is not correct'];
    } 
    );
  }
}

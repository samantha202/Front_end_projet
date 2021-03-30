import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  password ='';
  nom = '';
  prenom ='';
  email = '';
  errors = [''];
  constructor(private user: AuthentificationService) { }

  ngOnInit(): void {
  }
  AddUser()
  {
    const users = new Utilisateur(this.nom,this.prenom,this.email,this.password);
    this.user.addUtilisateurs(users)
    .pipe()
    .subscribe(
      data => {
        console.log("resultat requete "+data);
      }
    );
  }
}

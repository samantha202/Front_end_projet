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
  data: null|undefined|Utilisateur;
  constructor(private user: AuthentificationService,private router: Router) { }

  ngOnInit(): void {
  }
  async addUser()
  {
    const users = new Utilisateur(this.nom,this.prenom,this.email,this.password);
    this.data = await this.user.addUtilisateurs(users).toPromise();
    try{
      console.log("resultat requete "+this.data);
      this.router.navigate(['/login']);
    }catch(err)
    {
      throw err;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { StripeService,ElementsOptions,Elements,Element as StripeElement, } from "ngx-stripe";
import {HttpClient } from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  elements!: Elements|null|undefined ;
  typeVetement = 1;
  card!: StripeElement;
  nom = '';
  prenom = '';
  email = '';
  telephone = '';
  adresse = '';
  quantite :number;
  montant: number;
  prix:number;
  elementsOptions: ElementsOptions = {
    locale: 'fr'
  };
  constructor( private stripeService: StripeService,
    private http: HttpClient,
    private session: SessionStorageService) {
  }

  ngOnInit(): void {
    this.initButtonStripe();
    this.quantite = 1;
    this.nom = this.session.retrieve("nom");
    this.prenom = this.session.retrieve("prenom");
    this.email = this.session.retrieve("email");
    this.adresse = this.session.retrieve("adresse");
  }
  choixShirt(choix){
    this.typeVetement = 1;
    this.prix = 50;
    this.quantiteOnChange();
  }
  choixPolo(choix){
    this.typeVetement= 2;
    this.prix = 100;
    this.quantiteOnChange();
  }
  quantiteOnChange()
  {
    this.montant = (this.prix)*(this.quantite);
  }
  initButtonStripe(){
    const promise = this.stripeService.elements(this.elementsOptions).toPromise();
    promise.then(elements =>{
      this.elements = elements;
      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
             base: {
             iconColor: '#666EE8',
             color: '#31325F',
             lineHeight: '40px',
             fontWeight: 300,
             fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
             fontSize: '18px',
             '::placeholder': 
              {
                color: '#CFD7E0'
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    })
  }
  buy(){
    const promise = this.stripeService.createToken(this.card,{}).toPromise();
    promise.then(obj => {
      if (obj) {
        console.log("Token is --> ",obj.token.id);
        this.http.post("http://localhost:3000/charge",
        {
        token : obj.token.id,
        email: this.email,
        mont: this.montant,
        }).subscribe(
        (res)=>{
        console.log("la reponse du serveur est la suivante",res);
        console.log('Paiement effecuté');
        },
        (err)=>{
          console.log('erreur est ',err)
         }) 
       } 
       else {
       console.log("Ereur creé par la token ");
      }
    });
  }
}

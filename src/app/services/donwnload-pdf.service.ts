import { Injectable } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class DonwnloadPDFService {
   dattes : any;
   convt : string;
  constructor(private session: SessionStorageService,private router : Router){ }

  heure()
  {
    const date = new Date();
    const heure = date.getHours();
    const minutes = date.getMinutes();
    if(minutes < 10)
     return heure + ":" + "0" +minutes;
    else
     return heure + ":" +minutes;
  }
  downloadPDF(prix:number,quantite:number,montant:number,telephone:String){
    this.dattes =  new Date();
    this.convt = this.dattes.toLocaleDateString();
    const head = [['N de facture', 'Prix unitaire', 'Quantité','Montant','Date','heure']]
    const data = [['2021-24',prix, quantite, montant,this.convt,this.heure()],]
    const doc = new jsPDF();
    var img = new Image();
    img.src = 'assets/logo.png';
    doc.addImage(img, 'png', 80, 20, 35, 35);
    doc.setFont("times");
    doc.getStyle("normal");
    doc.setFontSize(15); 
    doc.text("Efrei Inside",10,30);
    doc.text("Efrei@efrei;net",10,40);
    doc.text("adresse",10,50);
    doc.text("P:(+33)491371065",10,60);
    doc.setFontSize(15)
    doc.text(this.session.retrieve("nom")+"  "+this.session.retrieve("prenom"),130,50);
    doc.text(this.session.retrieve("email"),130,60);
    doc.setFontSize(11);
    doc.text(this.session.retrieve("adresse"),130,70);
    doc.text(this.session.retrieve("telephone"),130,80);
    autoTable(doc, {
      startY: 110,
      head: head,
      body: data,
      didDrawCell: (data) => {
        console.log(data.column.index)
      },
    })
    doc.save('facture.pdf')
  }
}

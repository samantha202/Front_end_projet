import { Component, OnInit } from '@angular/core';
import { GooglePlaceModule, GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { MapsService } from 'src/app/services/maps.service';

//variable por stocker les différentes valeurs du Geocoding
var geocoder: any;
var marker : any;
var infowindow:any;
var infowindowContent: any;
var map: any;
var marker:any;
var adresse : any;

@Component({
  selector: 'app-searchr',
  templateUrl: './searchr.component.html',
  styleUrls: ['./searchr.component.css']
})
export class SearchrComponent implements OnInit {
  adresse = '';
  google: any ;
  map: any;
  constructor(private maps:MapsService) { }

  ngOnInit(): void {
    this.initMap(); //j'initialise ma carte au préalable sinon il ne sera pas visible
  }
  //cette fonction permet d'initialiser ma carte 
  initMap(){
    var latlng = new google.maps.LatLng(46.52863469527167,2.43896484375);
    var mapOptions = {
      zoom      : 6,
      center    : latlng,
      mapTypeId : google.maps.MapTypeId.ROADMAP,
    }
    const getElement = document.getElementById('mapp-canvas');
    if(getElement){
      this.map = new google.maps.Map(getElement, mapOptions);
      map = this.map;
    } 
  }
  doGeocoding()
  {
    this.adresse = (<HTMLInputElement>document.getElementById('adresse')).value;
    adresse = this.adresse;
    geocoder = this.maps.geocoding(this.adresse);
    this.SearchAdress();
  }
    SearchAdress() {
      const self = this;
      infowindow = new google.maps.InfoWindow();
      infowindowContent = document.getElementById('infowindow-content');
      infowindow.setContent(infowindowContent); 
      geocoder.geocode({ 'address':this.adresse}, function(results:any) {
        map.setZoom(18);
        map.setCenter(results[0].geometry.location);
          
      // Création du marqueur du lieu (épingle)
          marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          draggable: true,
          title: "precisez votre position"
      });
      // la chaine caractère que contient infoswindows
      const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="">'+adresse+'</h1>' +'</div>'+'</div>'
      marker.bindTo('bounds',map);
      marker.setVisible(true);
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      marker.addListener('click', function() { //ajout du listener sur le marquer l'evenement attendu est un click
        infowindow.open(map, marker);
      })
    });
  }
}

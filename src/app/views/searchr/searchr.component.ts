import { Component, OnInit } from '@angular/core';
import { GooglePlaceModule, GooglePlaceDirective } from "ngx-google-places-autocomplete";

@Component({
  selector: 'app-searchr',
  templateUrl: './searchr.component.html',
  styleUrls: ['./searchr.component.css']
})
export class SearchrComponent implements OnInit {

  google: any ;
map: any;
  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
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
    } 
  }
}

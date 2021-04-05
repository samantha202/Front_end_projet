import { Injectable } from '@angular/core';

//variable pour stocker les différentes valeurs du Geocoding
 var geocoder;
 
@Injectable({
  providedIn: 'root'
})
export class MapsService { 
 adresse='';
  constructor() { }
  //geocoding
  geocoding(adr:string) {
  this.adresse = adr;
  geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': adr}, function(results:any) {
      const ville = results[0].address_components[2].long_name;
      const code_postal = results[0].address_components[6].long_name;
      const rue = results[0].address_components[1].long_name;
      const numero = results[0].address_components[0].long_name;
      const departement = results[0].address_components[4].long_name;
      const latitude = results[0].geometry.location.lat();
      const longitude = results[0].geometry.location.lng();
    })
    return geocoder;
  }
}

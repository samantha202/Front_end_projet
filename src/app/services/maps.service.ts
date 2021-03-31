import { Injectable } from '@angular/core';

//variable pour stocker les différentes valeurs du Geocoding
 var geocoder: any;
 var ville: any;
 var code_postal: string;
 var rue: string;
 var numero: string;
 var departement:string;
 var latitude:string;
 var longitude:string;
 var adresse : any;
@Injectable({
  providedIn: 'root'
})
export class MapsService { 
  constructor() { }
  //geocoding
  geocoding(adr:string) {
  adresse = adr;
  geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': adr}, function(results:any) {
      ville = results[0].address_components[2].long_name;
      code_postal = results[0].address_components[6].long_name;
      rue = results[0].address_components[1].long_name;
      numero = results[0].address_components[0].long_name;
      departement = results[0].address_components[4].long_name;
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
    })
    return geocoder;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [944, 1011, 984].map((n) => `assets/${n}.jpg`);
  ngOnInit(): void {
  }

}

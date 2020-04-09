/*********************************************************************************
* WEB422 – Assignment 05
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: _______Chezer Banagua_______________ Student ID: ______106145170________ Date: _______March 26,2020_________
*
********************************************************************************/ 

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "web422-a4";

onActivate(event) {
  window.scroll(0,0);

}


}


import { Component, OnInit } from '@angular/core';
//import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public alumnos: any;

  constructor() {
    this.alumnos = [
    {nombre: 'isa', email: "isa@gmai.com"},
    {nombre: 'marta', email: "marta@gmai.com"},
    {nombre: 'gustavo', email: "gustavo@gmai.com"}
    ]
   }

  ngOnInit() {
  }

}

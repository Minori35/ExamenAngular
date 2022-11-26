import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  cadena: string ='';
  mayuscula: any;
  minuscula: any;

  constructor() { }

  ngOnInit(): void {
  }

  generarString(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 250; i++) {
        this.cadena += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

   this.mayuscula= this.cadena.search('A');
   this.minuscula= this.cadena.search('a')
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  registro : any [] = [
    {
      id:1368,
      item: 'Registro de asuntos',
      padre : null,
      acceso:1,
      ruta:'registro-asunto.html'
    },
    {
      id:1369,
      item: 'Consulta de asuntos',
      padre : null,
      acceso:1,
      ruta:'consulta-asunto.html'
    },
    {
      id:1370,
      item: 'Reportes',
      padre : null,
      acceso:1,
      ruta: null
    },
    {
      id:1371,
      item: 'Gastos',
      padre : null,
      acceso:1,
      ruta: null
    },
    {
      id:1372,
      item: 'Reporte de asuntos',
      padre : 1370,
      acceso:1,
      ruta: null
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

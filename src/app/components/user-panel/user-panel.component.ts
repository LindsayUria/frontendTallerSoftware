import { Component } from '@angular/core';

export interface TableElement {
  title: string;
  position: number;
  tipo: string;
  fechaSolicitud: Date;
  fechaUltimaRevicion: Date;
  estado: string;
}

const ELEMENT_DATA: TableElement[] = [
  {position: 1, title: 'Hydrogen', tipo: "Evento", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 2, 27),estado: "Rechazado"},
  {position: 2, title: 'Helium', tipo: "Evento", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 2, 27),estado: "Pendiente"},
  {position: 3, title: 'Lithium', tipo: "Publicacion", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 7, 12),estado: "Aceptado"},
  {position: 4, title: 'Beryllium', tipo: "Publicacion", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 2, 27),estado: "Rechazado"},
  {position: 5, title: 'Boron', tipo: "Evento", fechaSolicitud: new Date(2023, 2, 27), fechaUltimaRevicion: new Date(2023, 5, 27),estado: "Aceptado"},
];

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {

  displayedColumns: string[] = ['position', 'title', 'tipo', 'fechaSolicitud', 'fechaUltimaRevicion', 'estado'];
  dataSource = ELEMENT_DATA;

  obtenerFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
  }

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  solicitudes = [
    { id: 1, nombre: 'Solicitud 1', descripcion: 'Descripción de la solicitud 1', estado: 'Pendiente' },
    { id: 2, nombre: 'Solicitud 2', descripcion: 'Descripción de la solicitud 2', estado: 'Aprobada' },
    { id: 3, nombre: 'Solicitud 3', descripcion: 'Descripción de la solicitud 3', estado: 'Rechazada' }
  ];

}

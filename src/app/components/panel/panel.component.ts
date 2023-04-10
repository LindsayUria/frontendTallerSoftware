import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
//import {TodoDialogComponent} from '../../components/todo-dialog/todo-dialog.component'
import { ViewPostsComponent } from './view-posts/view-posts.component';

interface Solicitud {
  numero: number;
  nombre: string;
  asunto: string;
  fecha: Date;
  hora: string;
  // referencia: 'Ver detalles de la publicacion';
  referencia: string;
  estados: 'Rechazado' | 'Aprobado' | 'Pendiente' | 'Enviado';
}


interface Detalle{
  numero: number;
  nombre: string;
  asunto: string;
  fecha: Date;
  hora: string;
  estado: 'Rechazado' | 'Aprobado' | 'Pendiente'| 'Enviado';
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',

  styleUrls: ['./panel.component.css'],
  template: `
    <button class="btn-view-Detail" (click)="openPopup()">Ver Detalle</button>
  `


})
export class PanelComponent {



  constructor(
    private dialog: MatDialog,
    private dialog2: Dialog
    ) {}

  openPopup() {
    const dialogRef = this.dialog.open(Component);
  }

  solicitudes: Solicitud[] = [
    {
      numero: 1,
      nombre: 'Juan Pérez',
      asunto: 'Solicitud de permiso',
      fecha: new Date(2023, 2, 27),
      hora: '14:30',
      referencia: 'Ver detalles de la publicacion',
      estados: 'Pendiente',
    },
    {
      numero: 2,
      nombre: 'María Gómez',
      asunto: 'Solicitud de vacaciones',
      fecha: new Date(2023, 2, 28),
      hora: '10:00',
      referencia: 'Ver detalles de la publicacion',
      estados: 'Aprobado',
    },
    {
      numero: 3,
      nombre: 'Pedro Rodríguez',
      asunto: 'Solicitud de presupuesto',
      fecha: new Date(2023, 2, 28),
      hora: '16:15',
      referencia: 'Ver detalles de la publicacion',
      estados: 'Rechazado',
    },
    {
      numero: 4,
      nombre: 'Amanda Ramirez',
      asunto: 'Solicitud de publicacion',
      fecha: new Date(2023, 2, 28),
      hora: '19:55',
      referencia: 'Ver detalles de la publicacion',
      estados: 'Enviado',
    }
  ];

  cambiarEstado(solicitud: Detalle, nuevoEstado: 'Rechazado' | 'Aprobado' | 'Pendiente'| 'Enviado') {
    solicitud.estado = nuevoEstado;
  }


  verDetalle(solicitud: Solicitud, verDetalle:'Ver Detalle '){
    solicitud.referencia = verDetalle;
  }
  obtenerFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
  }


  getEstadoClass(estado : String): String{

    switch (estado) {
      case 'Aprobado':
        return 'estado-aprobado';
      case 'Rechazado':
        return 'estado-rechazado';
      case 'Pendiente':
        return 'estado-pendiente';
      case  'Enviado':
        return 'estado-enviado';
      default:
        return 'black';
    }
  }

  openDialog(){
    this.dialog2.open(ViewPostsComponent,{
      width: '50vw',
      height: 'max-height',
      data: {

      },
    });
  }







}

import { Component } from '@angular/core';

interface Solicitud {
  numero: number;
  nombre: string;
  asunto: string;
  fecha: Date;
  hora: string;
  estado: 'rechazado' | 'aprobado' | 'pendiente';
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  solicitudes: Solicitud[] = [
    {
      numero: 1,
      nombre: 'Juan Pérez',
      asunto: 'Solicitud de permiso',
      fecha: new Date(2023, 2, 27),
      hora: '14:30',
      estado: 'pendiente'
    },
    {
      numero: 2,
      nombre: 'María Gómez',
      asunto: 'Solicitud de vacaciones',
      fecha: new Date(2023, 2, 28),
      hora: '10:00',
      estado: 'aprobado'
    },
    {
      numero: 3,
      nombre: 'Pedro Rodríguez',
      asunto: 'Solicitud de presupuesto',
      fecha: new Date(2023, 2, 28),
      hora: '16:15',
      estado: 'rechazado'
    }
  ];

  cambiarEstado(solicitud: Solicitud, nuevoEstado: 'rechazado' | 'aprobado' | 'pendiente') {
    solicitud.estado = nuevoEstado;
  }

  obtenerFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
  }

}

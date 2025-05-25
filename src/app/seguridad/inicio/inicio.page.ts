import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/api/publicacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone:false

})
export class InicioPage implements OnInit {

  publicaciones: any[] = [];

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit() {
    this.cargarPublicaciones();
  }

  cargarPublicaciones() {
    this.publicacionService.obtenerPublicaciones().subscribe({
      next: (data) => {
        this.publicaciones = data;
      },
      error: (error) => {
        console.error('Error al obtener publicaciones', error);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-publicacion',
  templateUrl: './add-publicacion.page.html',
  styleUrls: ['./add-publicacion.page.scss'],
})
export class AddPublicacionPage implements OnInit {


  fotoPublicacion: string = 'https://placehold.co/200x200?text=Agregar+foto';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }


  seleccionarImagen() {
    console.log("Función para seleccionar imagen no implementada aún");
  }
}

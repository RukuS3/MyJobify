import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-publicacion',
  templateUrl: './add-publicacion.page.html',
  styleUrls: ['./add-publicacion.page.scss'],
})
export class AddPublicacionPage implements OnInit {


  fotoPublicacion: string = 'https://placehold.co/200x200?text=Agregar+foto';

  constructor() { }

  ngOnInit() {
  }



  seleccionarImagen() {
    console.log("Función para seleccionar imagen no implementada aún");
  }
}

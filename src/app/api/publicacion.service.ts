// src/app/api/publicacion.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private apiUrl = 'https://us-central1-jobify-16691.cloudfunctions.net/getPublicaciones';

  constructor(private http: HttpClient) {}

  obtenerPublicaciones(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

}

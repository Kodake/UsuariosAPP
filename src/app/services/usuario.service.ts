import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // url = 'https://gorest.co.in/public-api/users';
  // token = 'NIsVOfIwTZeA01FIOS2hd26pPVZtvXxtdAFP';
  // url = 'https://randomuser.me/api/?inc=name,location,nat,picture';
  url = 'https://picsum.photos/v2/list';
  urlById = 'https://picsum.photos/id/';
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    // return this.http.get<any>(this.url + '?access-token=' + this.token);
    return this.http.get<any>(this.url);
  }

  getUsuario(id: number): Observable<any> {
    // return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
    return this.http.get<any>(this.urlById + id + '/info');
  }
}

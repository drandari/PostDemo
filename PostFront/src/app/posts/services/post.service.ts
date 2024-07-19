import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://localhost:7020/api/Post/';
  private getListEndpoint = 'GetList';
  private deleteEndpoint = 'Delete';
  private addEndpoint = 'Add';

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + this.getListEndpoint);
  }

  delete(id : number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + this.deleteEndpoint + '?id=' + id.toString());
  }

  add(nuevoPost): Observable<any> {
    return this.http.post<any>(this.apiUrl + this.addEndpoint, nuevoPost);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:5002/api/Room';

  constructor(private http: HttpClient) { }

  getAuditoriums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBuildingsSummary(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5002/api/BuildingsSummary');
  }

  createAuditorium(auditorium: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, auditorium);
  }

  updateAuditorium(auditorium: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${auditorium.id}`, auditorium);
  }

  deleteAuditorium(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
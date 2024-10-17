import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private apiUrl = 'http://localhost:5001/api/Building';

  constructor(private http: HttpClient) { }

  getBuildings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createBuilding(building: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, building);
  }

  updateBuilding(building: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${building.id}`, building);
  }

  deleteBuilding(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
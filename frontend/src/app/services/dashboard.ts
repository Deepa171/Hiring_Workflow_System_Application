import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private baseUrl = `${environment.apiUrl}/dashboard`;

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.baseUrl}/stats`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

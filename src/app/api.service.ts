import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }

  importCSV(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/import_csv`, formData);
  }

  addArticle(article: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_article`, article);
  }

  addFacture(facture: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_facture`, facture);
  }

  searchArticle(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search_article?query=${query}`);
  }

  generateCSV(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/generate_csv`, { responseType: 'blob' });
  }
}

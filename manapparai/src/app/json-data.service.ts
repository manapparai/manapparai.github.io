import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private http: HttpClient) { }

  getAllJsonData(fileNames: string[]):Observable<any[]>[] {
    return fileNames.map(fileName => {
      const filePath = `assets/jsondata/${fileName}.json`;
      return this.http.get<any[]>(filePath);
    });
  }
}

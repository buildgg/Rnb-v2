import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private configColumnsUrl = 'assets/settings/columns.json';

  constructor(private http: HttpClient) { }

  getColumns(columnsName: string): Observable<any> {
    return this.http.get<any>(this.configColumnsUrl)
      .pipe(
        map(value => value[columnsName])
      );
  }
}

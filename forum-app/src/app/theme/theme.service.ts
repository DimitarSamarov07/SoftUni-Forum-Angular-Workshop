import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITheme} from '../shared/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) {
  }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  }

  loadTheme<T = string>(id: string): Observable<ITheme<T>> {
    return this.http.get<ITheme<T>>(`${apiUrl}/themes/${id}`);

  }
}

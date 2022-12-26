import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location, WeatherResponse } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private geoApi = 'https://geocoding-api.open-meteo.com/v1/search';
  private weatherApi = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  searchLocation(query: string): Observable<Location[]> {
    return this.http.get<{ results: Location[] }>(`${this.geoApi}?name=${query}&count=5&language=en&format=json`)
      .pipe(map(res => res.results || []));
  }

  getWeather(lat: number, lon: number): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.weatherApi}?latitude=${lat}&longitude=${lon}&current_weather=true`);
  }
}

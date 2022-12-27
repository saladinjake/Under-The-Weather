import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { WeatherService } from './weather.service';
import { Location, WeatherResponse } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  searchControl = new FormControl('');
  locations$: Observable<Location[]> = of([]);
  
  selectedLocation: Location | null = null;
  weather: WeatherResponse | null = null;
  loading = false;
  
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.locations$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        if (!query || query.length < 2) return of([]);
        return this.weatherService.searchLocation(query).pipe(
          catchError(() => of([]))
        );
      })
    );
  }

  selectLocation(location: Location) {
    this.selectedLocation = location;
    this.searchControl.setValue('', { emitEvent: false });
    this.loading = true;
    
    this.weatherService.getWeather(location.latitude, location.longitude)
      .subscribe({
        next: (res) => {
          this.weather = res;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  getWeatherIcon(code: number): string {
    if (code === 0) return 'sun'; // clear
    if (code >= 1 && code <= 3) return 'cloud'; // partly cloudy
    if (code >= 45 && code <= 48) return 'cloud'; // fog
    if (code >= 51 && code <= 67) return 'droplets'; // rain
    if (code >= 71 && code <= 82) return 'cloud'; // snow
    if (code >= 95) return 'cloud'; // thunderstorm
    return 'sun';
  }
}

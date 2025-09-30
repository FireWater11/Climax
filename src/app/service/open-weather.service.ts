import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {

  private api_key = "db662f8f38355852d9a6ff3da5f9b0c2";
  private api_url = "https://api.openweathermap.org/data/2.5/weather";
  private http = inject(HttpClient);

  constructor() {

  }

  // https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=db662f8f38355852d9a6ff3da5f9b0c2

  buscarInfo(): Observable<WeatherResponse> {
    const url_completa =  this.api_url + "?q=dois+vizinhos&appid="+this.api_key+"&lang=pt_br&units=metric"

    return this.http.get<WeatherResponse>(url_completa);
  }

}

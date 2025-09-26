import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {

  api_key = "db662f8f38355852d9a6ff3da5f9b0c2";
  api_url = "https://api.openweathermap.org/data/2.5/weather";

  constructor() {

  }

  // https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=db662f8f38355852d9a6ff3da5f9b0c2

  buscarInfo() {
    const url_completa =  this.api_url + "?q=dois+vizinhos&appid="+this.api_key+"&lang=pt_br&units=metric"

    console.log(url_completa);
  }

}

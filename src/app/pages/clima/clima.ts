import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { WeatherResponse } from '../../models/weather-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-clima',
  
  templateUrl: './clima.html',
  styleUrls: ['./clima.scss']
})

export class Clima{

  navegador = inject(Router);
  open_weather = inject(OpenWeatherService)
  // dados_clima: WeatherResponse | null = null;
  dados_clima = toSignal<WeatherResponse | null>(
    this.open_weather.buscarInfo().pipe(
      catchError(err => {
        console.error('erro ao buscar dados' ,err); 
        return of(null); 
      })
    ),
    { initialValue: null }
  );

  // ngOnInit() {
  //   this.open_weather.buscarInfo();
  // }

  appName = 'Climax';
  tagline = 'A melhor previsão do tempo ao seu alcance!';

  pesquisar() { 
    this.navegador.navigate(['/pesquisa']);
  }

}
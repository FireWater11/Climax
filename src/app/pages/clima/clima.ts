import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.html',
  styleUrls: ['./clima.scss']
})
export class Clima implements OnInit {

  navegador = inject(Router);
  open_weather = inject(OpenWeatherService)

  ngOnInit() {
    this.open_weather.buscarInfo();
  }

  appName = 'Climax';
  tagline = 'A melhor previsão do tempo ao seu alcance!';

  pesquisar() { 
    this.navegador.navigate(['/pesquisa']);
  }
}
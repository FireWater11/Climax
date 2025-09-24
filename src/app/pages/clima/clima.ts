import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.html',
  styleUrls: ['./clima.scss']
})
export class Clima implements OnInit {

  navegador = inject(Router);

  ngOnInit(): void {
    
  }

  appName = 'Climax';
  tagline = 'A melhor previsão do tempo ao seu alcance!';

  pesquisar() { 
    this.navegador.navigate(['/pesquisa']);
  }
}
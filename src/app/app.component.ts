import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  galeriaGatos: string[] = [
    'assets/cats/imagem_1.jpg',
    'assets/cats/imagem_2.jpg',
    'assets/cats/imagem_3.jpg',
    'assets/cats/imagem_4.jpg',
    'assets/cats/imagem_5.jpg',
  ];

  galeriaPredios: string[] = [
    'assets/buildings/imagem_1.jpg',
    'assets/buildings/imagem_2.jpg',
    'assets/buildings/imagem_3.jpg',
    'assets/buildings/imagem_4.jpg',
    'assets/buildings/imagem_5.jpg',
  ];

  galeriaNatureza: string[] = [
    'assets/nature/imagem_1.jpg',
    'assets/nature/imagem_2.jpg',
    'assets/nature/imagem_3.jpg',
    'assets/nature/imagem_4.jpg',
    'assets/nature/imagem_5.jpg',
    'assets/nature/imagem_6.jpg',
    'assets/nature/imagem_7.jpg',
  ];
}

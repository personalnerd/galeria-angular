import { Component, Input } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  @Input() titulo: string;
  @Input() fotos: string[];

  posicao: number = 0;

  iconePrimeira = faStepBackward;
  iconeUltima = faStepForward;
  iconeProxima = faChevronRight;
  iconeAnterior = faChevronLeft;

  onClick(onde: string) {
    switch (onde) {
      case 'primeira':
        this.posicao = 0;
        break;
      case 'ultima':
        this.posicao = this.fotos.length - 1;
        break;
      case 'proxima':
        this.posicao++;
        break;
      case 'anterior':
        this.posicao--;
        break;
      default:
        break;
    }
  }
}

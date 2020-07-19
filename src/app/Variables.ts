import { Injectable } from '@angular/core';
import {Forfait} from './Forfait';
@Injectable()
export class Variables {
  selected = true;
  listeForfaitMango: Forfait [] = [];
  listeForfaitHemle: Forfait [] = [];
  listeForfait: Forfait [] = [];
  listeForfaitH: Forfait [] = [];
  listeForfaitM: Forfait [] = [];
  url1 = 'http://localhost:8080/GestionForfait/ListerForfaitMango';
  url2 = 'http://localhost:8080/GestionForfait/ListerForfaitHemle';
  url = 'http://localhost:4200';
}

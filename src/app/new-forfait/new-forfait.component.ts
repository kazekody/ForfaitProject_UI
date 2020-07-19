import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Variables} from '../Variables';

@Component({
  selector: 'app-new-forfait',
  templateUrl: './new-forfait.component.html',
  styleUrls: ['./new-forfait.component.scss']
})
export class NewForfaitComponent implements OnInit {
  intitule: string;
  sms: number;
  data: number;
  appel: number;
  prix: number;
  validite: number;
  response: any;
  link = [];
  url = 'http://localhost:8080/GestionForfait/AjouterForfait/';

  constructor(private router: Router, private http: HttpClient, private variable: Variables) {
  }

  ngOnInit() {
  }

  Annuler() {

  }

  Valider() {
    this.http.post(this.url + this.intitule + '/' + this.appel + '/' + this.sms + '/' + this.data + '/' +
    this.prix + '/' + this.validite, this.intitule).subscribe(
      (response) => {
        this.response = response;
        if (this.response.returnMsg === 'success') {
          console.log('Enregistrement reussi !');
          this.link = ['successForfait'];
          this.router.navigate(this.link);
        } else {
          console.log('Echec !');
        }

      },
      (error) => {
        console.log('Erreur', error);
      },
      () => {
        console.log('Enregistrement reussi et termine !');
      }
    );
  }

}

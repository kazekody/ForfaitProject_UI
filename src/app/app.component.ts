import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Variables} from './Variables';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Projet ISI';
  selected = true;
  link = [];
  response: any;
  constructor(private router: Router, private http: HttpClient, private Variable: Variables) { }

  ngOnInit() {
  }
  newForfait() {
    this.selected = false;
    this.link = ['newForfait'];
    this.router.navigate(this.link);
  }
  bestForfait() {
    this.link = ['bestForfait'];
    this.router.navigate(this.link);
  }
  listeForfait() {
    this.http.get(this.Variable.url1 ).subscribe(
      (response) => {
       // console.log(JSON.stringify(list));
        this.response = response;
        this.Variable.listeForfaitMango = this.response.returnValue;
      },
      (erreur) => {
        console.log('Erreur', erreur);
      },
      () => {
        console.log('Affichage des forfaits Mango reussi !');
        console.log(this.Variable.listeForfaitMango.length);
      }
    );

    this.http.get(this.Variable.url2 ).subscribe(
      (response) => {
       // console.log(JSON.stringify(list));
        this.response = response;
        this.Variable.listeForfaitHemle = this.response.returnValue;
      },
      (erreur) => {
        console.log('Erreur', erreur);
      },
      () => {
        console.log('Affichage des forfaits Hemle reussi !');
        this.link = ['listForfait'];
        this.router.navigate(this.link);
        console.log(this.Variable.listeForfaitHemle.length);
      }
    );

  }

  }

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Variables} from '../Variables';

@Component({
  selector: 'app-best-forfait',
  templateUrl: './best-forfait.component.html',
  styleUrls: ['./best-forfait.component.scss']
})
export class BestForfaitComponent implements OnInit {
prioriteSms: number;
prioriteAppel: number;
prioriteData: number;
dure: number;
i: number;
montant: number;
response: any;
  link = [];
  url = 'http://localhost:8080/GestionForfait/MeilleurForfait/';
  constructor(private router: Router, private http: HttpClient, private variable: Variables) { }

  ngOnInit() {
  }
valider() {
    this.http.post(this.url + '/' + this.montant + '/' + this.dure + '/' + this.prioriteData + '/' +
    this.prioriteSms + '/' + this.prioriteAppel, this.montant).subscribe(
      (response) => {
        // console.log(JSON.stringify(list));
         this.response = response;
         this.variable.listeForfait = this.response.returnValue;
         for (this.i = 0; this.i <= this.variable.listeForfait.length - 1; this.i++) {
           if (this.variable.listeForfait[this.i].intitule.includes('Mango')) {
              this.variable.listeForfaitM.push(this.variable.listeForfait[this.i]);
           }
           if (this.variable.listeForfait[this.i].intitule.includes('Hemle')) {
            this.variable.listeForfaitH.push(this.variable.listeForfait[this.i]);
         }
           console.log(this.variable.listeForfaitM);
           console.log(this.variable.listeForfaitH);

         }
         this.link = ['selectForfait'];
         this.router.navigate(this.link);
       },
       (erreur) => {
         console.log('Erreur', erreur);
       },
       () => {
         console.log('Stockage des forfaits optimaux reussi !');
         console.log(this.variable.listeForfaitMango.length);
       }
     );
}
}

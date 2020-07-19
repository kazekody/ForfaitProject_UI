import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Variables} from '../Variables';


@Component({
  selector: 'app-select-forfait',
  templateUrl: './select-forfait.component.html',
  styleUrls: ['./select-forfait.component.scss']
})
export class SelectForfaitComponent implements OnInit {

listForfaitH = this.variable.listeForfaitH;
listForfaitM = this.variable.listeForfaitM;
  constructor(private router: Router, private http: HttpClient, private variable: Variables) { }

  ngOnInit() {
  }

}

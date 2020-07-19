import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Variables} from '../Variables';

@Component({
  selector: 'app-list-forfait',
  templateUrl: './list-forfait.component.html',
  styleUrls: ['./list-forfait.component.scss']
})
export class ListForfaitComponent implements OnInit {
listeForfaitMango = this.variable.listeForfaitMango;
  constructor(private router: Router, private http: HttpClient, private variable: Variables) { }

  ngOnInit() {
  }

}

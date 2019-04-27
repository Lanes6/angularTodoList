import { Component, OnInit } from '@angular/core';
import {Tache} from '../model/Tache';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

historiques=[]

constructor() { }

ngOnInit() {
}

}

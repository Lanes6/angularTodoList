import { Component, OnInit } from '@angular/core';
import {Tache} from '../model/Tache';

@Component({
  selector: 'app-tacheliste',
  templateUrl: './tacheliste.component.html',
  styleUrls: ['./tacheliste.component.css']
})
export class TachelisteComponent implements OnInit {

    taches = [{
	"id": 1,
	"name": "reveil",
	"description": "wakeup",
	},
	{
	"id": 2,
	"name": "manger",
	"description": "c est la deuxieme",
	},{
	"id": 3,
	"name": "boire",
	"description": "c est la troisieme",
	}];

	historiques=[]


  constructor() {

   }

  ngOnInit() {
  }

  /*checkTache(string: id): void {
    if (this.persons.length !== 0) {
      this.selectedPerson = person;
    }
  }*/

}

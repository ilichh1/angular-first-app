import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss']
})

export class CompOneComponent implements OnInit {
  name = 'Componente Uno!';

  constructor() { }

  ngOnInit() {
    console.log('Componente uno iniciado!')
  }

}

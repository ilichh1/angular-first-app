import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss']
})
export class CompTwoComponent implements OnInit {
  name = 'Componente Dos!';

  constructor() { }

  onPress() {
    console.log('Botón presionado!')
  }

  ngOnInit() {
  }

}

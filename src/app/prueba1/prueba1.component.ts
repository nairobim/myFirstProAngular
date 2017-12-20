import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.scss']
})
export class Prueba1Component {
public title: string;
hoy: Date = new Date();
mhoy: number = this.hoy.getMonth();
@Input() datos: Array<string>;
@Input() edad: number;
@Output() fechanac = new EventEmitter<Date>();

  constructor() {
     this.title = 'Componente Hijo';
  }


}

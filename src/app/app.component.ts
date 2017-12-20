import { Component, OnInit } from '@angular/core';
import { IPersona, Persona } from './app';

import { Prueba1Component } from './prueba1/prueba1.component';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
public componente: string;
public datosDTO: IPersona;
public fechanac: Date;
hoy: Date = new Date();
mhoy: number = this.hoy.getMonth();
public edad: number;
public age: number;

public Sexo = [
 { Name: 'Masculino' },
 { Name: 'Femenino' }
  ];

curSexo: any = this.Sexo[0];

fechaOutput($event: Date): void {
this.datosDTO.fechaNacimiento = $event;
}

constructor() {
this.componente = 'Componente Padre';

}

ngOnInit() {
this.datosDTO = new Persona;
this.datosDTO.nombres = 'Nairobi';
this.datosDTO.apellidos = 'Manrique';
this.datosDTO.fechaNacimiento = new Date('1978-05-19');
this.datosDTO.sexo = 'Femenino';
this.datosDTO.pais = 'Venezuela';
this.calculateAge(this.datosDTO.fechaNacimiento);
this.edades();
console.log(this.datosDTO.fechaNacimiento);
console.log(this.age, 'soy age');
console.log(this.datosDTO);
}

edades() {
    this.age = this.edad;
    return (this.age);
}

calculateAge(valorf: Date) { // birthday is a date
    const fechaNac = new Date(valorf);
    this.edad = this.hoy.getFullYear() - fechaNac.getFullYear();
    this.mhoy = this.hoy.getMonth() - fechaNac.getMonth();
      if (this.mhoy < 0 || (this.mhoy === 0 && this.hoy.getDate() < fechaNac.getDate())) {
        this.edad--;
      }
      console.log(this.edad, 'padre edad');
      console.log(this.datosDTO);
       }

setNewSexo(Name: 'Femenino' | 'Masculino') {
    console.log(Name);
    this.curSexo = this.Sexo.filter(value => value.Name === (Name));
    this.datosDTO.sexo = this.curSexo[0];
    console.log(this.datosDTO.sexo, 'r');
    console.log(this.curSexo);
  }
 }

import { Component, OnInit } from '@angular/core';
import { IPersona, Persona, NewPerson } from './app';

import { Prueba1Component } from './prueba1/prueba1.component';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
public componente: string;
public datosDTO: IPersona;
public fechanac: Date;
public nperson: Array<IPersona>;
// public apersonas: Array<IPersona>;
hoy: Date = new Date();
mhoy: number = this.hoy.getMonth();
public edad: number;
public age: number;

public Sexo = [
{ Name: 'Seleccione' },
{ Name: 'Masculino' },
{ Name: 'Femenino' }
  ];

curSexo: any = this.Sexo[0];


fechaOutput($event: Date): void {
this.datosDTO.fechaNacimiento = $event;
}

constructor() {
this.componente = 'Componente Padre';
this.datosDTO = new Persona('', '', null, 'Masculino', '', '', 0);
this.nperson = [
  new Persona('Pedro', 'Perez', new Date('1976-08-14'), 'Masculino'),
];

}

ngOnInit() {
this.datosDTO.nombres = 'Nai';
this.datosDTO.apellidos = 'Manrique';
this.datosDTO.fechaNacimiento = new Date('1978-05-19');
this.datosDTO.sexo = 'Femenino';
this.datosDTO.pais = 'Venezuela';
this.datosDTO.email = 'ninguno@nn.com';
console.log('esta es ng nperson', this.nperson);
this.calculateAge(this.datosDTO.fechaNacimiento);
this.edades();
console.log(this.datosDTO.fechaNacimiento);
console.log(this.datosDTO.sexo, 'soy sexo');
console.log('Esta es datosDTO', this.datosDTO);
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
      this.datosDTO.edad = this.edad;
      console.log(this.edad, this.datosDTO.edad, 'padre edad');
      console.log(this.datosDTO);
       }

setNewSexo(Name: 'Femenino' | 'Masculino') {
    console.log(Name);
    this.curSexo = this.Sexo.filter(value => value.Name === (Name));
    this.datosDTO.sexo = Name;
    console.log(this.datosDTO.sexo, 'r');
    console.log(this.curSexo);
  }

newPerson(this.datosDTO) {
this.nperson.push(this.datosDTO);
this.datosDTO = new Persona('', '', new Date(''), 'Masculino', '', '');
this.edad = 0;
console.log('la funcion', this.datosDTO);
}

}


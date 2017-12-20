export interface IPersona {
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    pais ?: string;
    email ?: string;
    Masculino?: string;
    Femenino?: string;
    sexo: 'Femenino' | 'Masculino';
  }

export class Persona implements IPersona {
nombres: string;
apellidos: string;
fechaNacimiento: Date = new Date ();
pais: string;
email: string;
Masculino?: string;
Femenino?: string;
sexo: 'Femenino' | 'Masculino';
yearnac: number = this.fechaNacimiento.getFullYear();
monthnac: number = this.fechaNacimiento.getMonth();


constructor (value?: IPersona) {

}

}

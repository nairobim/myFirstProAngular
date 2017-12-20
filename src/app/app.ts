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

export abstract class NewPerson implements IPersona {
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date = new Date ();
    pais ?: string;
    email ?: string;
    Masculino ?: string;
    Femenino ?: string;
    sexo: 'Femenino' | 'Masculino';

constructor (nombres: string,
  apellidos: string,
  fechaNacimiento: Date = new Date (),
  sexo: 'Femenino' | 'Masculino',
  pais ?: string,
  email ?: string) {
    }
public abstract newPerson(): void;

    }

export class Persona extends NewPerson {

constructor (nombres: string,
  apellidos: string,
  fechaNacimiento: Date = new Date (),
  sexo: 'Femenino' | 'Masculino',
  pais ?: string,
  email ?: string,
  ) {
super(nombres, apellidos, fechaNacimiento, sexo, pais, email );
}
public newPerson() {

}
}


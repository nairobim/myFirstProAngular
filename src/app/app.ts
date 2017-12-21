export interface IPersona {
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    pais ?: string;
    email ?: string;
    Masculino ?: string;
    Femenino ?: string;
    edad ?: number;
    sexo: 'Femenino' | 'Masculino';
  }

export abstract class NewPerson implements IPersona {
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    pais ?: string;
    email ?: string;
    Masculino ?: string;
    Femenino ?: string;
    edad ?: number;
    sexo: 'Femenino' | 'Masculino';

constructor (nombres: string,
    apellidos: string,
    fechaNacimiento: Date,
    sexo: 'Femenino' | 'Masculino',
    pais ?: string,
    email ?: string,
    edad ?: number) {
    }
public abstract newPerson(): void;

    }

export class Persona extends NewPerson {

    constructor (nombres: string,
        apellidos: string,
        fechaNacimiento: Date,
        sexo: 'Femenino' | 'Masculino',
        pais ?: string,
        email ?: string,
        edad ?: number
        ) {
      super(nombres, apellidos, fechaNacimiento, sexo, pais, email, edad );
      }

public newPerson() {

}
}


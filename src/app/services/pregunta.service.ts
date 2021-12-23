import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta = 0;

  opcionSeleccionada: Respuesta;
  desabilitarBtn = true;
  preConfirmada = false;

  indexRepuesta: number;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Argentina', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Ciudad de Mexico', 0),
      new Respuesta('Madrid', 0),
      new Respuesta('San Salvador', 0),
    ]),
    new Pregunta('Cual es la capital de Honduras', [
      new Respuesta('Buenos Aires', 0),
      new Respuesta('Ciudad de Mexico', 0),
      new Respuesta('Tegucigalpa', 1),
      new Respuesta('San Salvador', 0),
    ]),
    new Pregunta('Cual es la capital de Mexico', [
      new Respuesta('Puerto Principe', 0),
      new Respuesta('Ciudad de Mexico', 1),
      new Respuesta('Managua', 0),
      new Respuesta('San Salvador', 0),
    ])
  ]
  constructor() {

   }


  getPreguntas(){
    return this.preguntas.slice();
  }
}

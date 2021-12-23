import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  listPregunta: Pregunta[];

  constructor(public _preguntaService: PreguntaService) {
    this.listPregunta = [];
   }

  ngOnInit(): void {
    this.listPregunta = this._preguntaService.getPreguntas();
  }

  obtenerPregunta(){
    return this.listPregunta[this._preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRsp: number){
    if(this._preguntaService.preConfirmada === true){
      return;
    }
    this._preguntaService.opcionSeleccionada = respuesta;
    this._preguntaService.desabilitarBtn = false;
    this._preguntaService.indexRepuesta = indexRsp;
  }

  addClassOptions(respuesta: Respuesta){
    // respuesta seleccionada y NO confirmada
    if(respuesta === this._preguntaService.opcionSeleccionada && !this._preguntaService.preConfirmada){
      return "active text-light";
    }

    // respuesta correcta y esta confirmada
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.preConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta == 1){
      return "list-group-item-success";
    }

    // respuesta incorrecta y esta confirmada
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.preConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta == 0){
      return "list-group-item-danger";
    }


    return '';
  }

  iconCorrecta(respuesta: Respuesta){
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.preConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta == 1){
      return true;
    }else{
      return false;
    }

  }

  iconIncorrecta(respuesta: Respuesta){
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.preConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta == 0){
      return true;
    }else{
      return false;
    }

  }

}

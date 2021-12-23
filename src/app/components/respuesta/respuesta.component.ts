import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  listPreguntas: Pregunta[];
  respuestasUsuario: any[];

  constructor(private _preguntaService: PreguntaService, private router: Router) { }

  ngOnInit(): void {
    this.listPreguntas = this._preguntaService.preguntas;
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
  }

  volver(){
    this._preguntaService.respuestasUsuario = [];
    this.router.navigate(['/dashboard']);
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

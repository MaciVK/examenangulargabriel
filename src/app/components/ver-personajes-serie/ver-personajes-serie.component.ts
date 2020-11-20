import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';
import { SeriesService } from './../../services/series.service';

@Component({
  selector: 'app-ver-personajes-serie',
  templateUrl: './ver-personajes-serie.component.html',
  styleUrls: ['./ver-personajes-serie.component.css'],
})
export class VerPersonajesSerieComponent implements OnInit {
  public personajes: Array<Personaje>;
  constructor(
    private _service: SeriesService,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarPersonajesSerie(id) {
    this._service.getPersonajes().subscribe(
      (respuesta) => {
        var arrayPersonajes = [];
        for (let person of respuesta) {
          if (person.idSerie == id) {
            arrayPersonajes.push(person);
          }
        }
        this.personajes = arrayPersonajes;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarPersonajesSerie(params.idserie);
    });
  }
}

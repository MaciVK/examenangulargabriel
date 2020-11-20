import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeriesService } from './../../services/series.service';
import { Serie } from './../../models/Serie';

@Component({
  selector: 'app-detalles-serie',
  templateUrl: './detalles-serie.component.html',
  styleUrls: ['./detalles-serie.component.css'],
})
export class DetallesSerieComponent implements OnInit {
  public serie: Serie;
  constructor(
    private _service: SeriesService,
    private _activeRoute: ActivatedRoute
  ) {}
  getSerie(id) {
    this._service.getSerieDetalles(id).subscribe(
      (respuesta) => {
        this.serie = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(
      (params: Params) => {
        this.getSerie(params.idserie);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

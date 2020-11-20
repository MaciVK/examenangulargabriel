import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/Serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public series: Array<string>;

  constructor(private _service: SeriesService) {
    this.series = [];
  }

  getSeries() {
    this._service.getSeries().subscribe(
      (respuesta) => {
        this.series = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.series);
  }

  ngOnInit(): void {
    this.getSeries();
  }
}

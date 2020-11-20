import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProvider } from './app.routing';
import { SeriesService } from './services/series.service';
import { DetallesSerieComponent } from './components/detalles-serie/detalles-serie.component';
import { VerPersonajesSerieComponent } from './components/ver-personajes-serie/ver-personajes-serie.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, DetallesSerieComponent, VerPersonajesSerieComponent],
  imports: [BrowserModule, routing, HttpClientModule],
  providers: [appRoutingProvider, SeriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

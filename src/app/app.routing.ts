import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesSerieComponent } from './components/detalles-serie/detalles-serie.component';
import { MenuComponent } from './components/menu/menu.component';
import { VerPersonajesSerieComponent } from './components/ver-personajes-serie/ver-personajes-serie.component';

const appRoutes: Routes = [
  //aqui los path
  { path: 'detalles/:idserie', component: DetallesSerieComponent },
  { path: 'personajesSerie/:idserie', component: VerPersonajesSerieComponent },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);

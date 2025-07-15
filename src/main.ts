import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import 'bootstrap'; // Asegúrate de que bootstrap esté importado si es necesario

// Importa directamente tus componentes standalone si tienen dependencias
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter([]),
    provideHttpClient()
  ]
}).catch(err => console.error(err));

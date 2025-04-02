import { ApplicationConfig, LOCALE_ID, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations }  from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';

import { MyPreset } from './mytheme';
import { tokenInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({ 
      theme: {
          preset: MyPreset,
          options: {
              prefix: 'p',
              darkModeSelector: false || 'none',
              cssLayer: false
          }
      },
      translation: {
        accept: 'Accepter',
        reject: 'Rejecter',
        upload: 'Importer',
        cancel: 'Annuler',
        //translations
      } 
    })
  ]
};


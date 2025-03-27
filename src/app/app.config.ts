import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations }  from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';
import { MyPreset } from './mytheme';

// const MyPreset = definePreset(Aura, {
//   semantic: {
//       primary: {
//           50: '{orange.50}',
//           100: '{orange.100}',
//           200: '{orange.200}',
//           300: '{orange.300}',
//           400: '{orange.400}',
//           500: '{orange.500}',
//           600: '{orange.600}',
//           700: '{orange.700}',
//           800: '{orange.800}',
//           900: '{orange.900}',
//           950: '{orange.950}'
//       }
//   }
// });

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(),
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


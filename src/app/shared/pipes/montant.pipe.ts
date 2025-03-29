import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'montant',
  standalone: true,
})
export class MontantPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) return '';

    let montantStr = value.toString().replace(/\s+/g, ''); // enlever espaces

    if (isNaN(Number(montantStr))) return value.toString(); // vérifier si c'est un nombre

    // Formatage avec des espaces tous les 3 chiffres (de droite à gauche)
    const formatted = montantStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return `${formatted} Ar`;
  }

}

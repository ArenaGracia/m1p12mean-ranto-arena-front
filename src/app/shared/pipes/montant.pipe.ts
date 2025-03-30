import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'montant',
  standalone: true,
})
export class MontantPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) return '';
    let montantStr = value.toString().replace(/\s+/g, '');
    if (isNaN(Number(montantStr))) return value.toString();
    const formatted = montantStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formatted} Ar`;
  }

}

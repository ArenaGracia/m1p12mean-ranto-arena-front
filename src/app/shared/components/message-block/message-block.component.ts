import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-block',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="flex flex-column items-center justify-content-center w-full p-4 text-gray-500 font-bold text-lg text-center">
      <i class="pi pi-info-circle text-4xl text-gray-400 mb-2"></i>
      <span>{{ message }}</span>
    </div>
  `,
})
export class MessageBlockComponent { 
  @Input() message: string = "Aucun élément trouvé.";

}

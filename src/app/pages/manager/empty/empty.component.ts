import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [
    CommonModule, CardModule, ButtonModule
  ],
  template: `<p-card class="card">
  <div class="font-semibold text-xl mb-4">Empty Page</div>
  <p>Use this page to start from scratch and place your custom content.</p>
  <div class="gap-3">
  <div class="card flex flex-wrap gap-4 justify-content-center  mb-6">
    <p-button label="Primary" />
    <p-button label="Secondary" severity="secondary" />
    <p-button label="Success" severity="success" />
    <p-button label="Info" severity="info" />
    <p-button label="Warn" severity="warn" />
    <p-button label="Help" severity="help" />
    <p-button label="Danger" severity="danger" />
    <p-button label="Contrast" severity="contrast" />
  </div>
  <div class="card flex flex-wrap gap-3 justify-content-center mb-6">
      <p-button label="Primary" [outlined]="true" />
      <p-button label="Secondary" [outlined]="true" severity="secondary" />
      <p-button label="Success" [outlined]="true" severity="success" />
      <p-button label="Info" [outlined]="true" severity="info" />
      <p-button label="Warning" [outlined]="true" severity="warn" />
      <p-button label="Help" [outlined]="true" severity="help" />
      <p-button label="Danger" [outlined]="true" severity="danger" />
      <p-button label="Contrast" [outlined]="true" severity="contrast" />
  </div>
  <div class="card">
      <div class="flex justify-content-center flex-wrap gap-3 mb-4">
          <p-button icon="pi pi-check" />
          <p-button icon="pi pi-bookmark" severity="secondary" />
          <p-button icon="pi pi-search" severity="success" />
          <p-button icon="pi pi-user" severity="info" />
          <p-button icon="pi pi-bell" severity="warn" />
          <p-button icon="pi pi-heart" severity="help" />
          <p-button icon="pi pi-times" severity="danger" />
      </div>
      <div class="flex justify-content-center flex-wrap gap-3 mb-4">
          <p-button icon="pi pi-check" [rounded]="true" />
          <p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" />
          <p-button icon="pi pi-search" [rounded]="true" severity="success" />
          <p-button icon="pi pi-user" [rounded]="true" severity="info" />
          <p-button icon="pi pi-bell" [rounded]="true" severity="warn" />
          <p-button icon="pi pi-heart" [rounded]="true" severity="help" />
          <p-button icon="pi pi-times" [rounded]="true" severity="danger" />
      </div>
      <div class="flex justify-content-center flex-wrap gap-3 mb-4">
          <p-button icon="pi pi-check" [rounded]="true" [outlined]="true" />
          <p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" [outlined]="true" />
          <p-button icon="pi pi-search" [rounded]="true" severity="success" [outlined]="true" />
          <p-button icon="pi pi-user" [rounded]="true" severity="info" [outlined]="true" />
          <p-button icon="pi pi-bell" [rounded]="true" severity="warn" [outlined]="true" />
          <p-button icon="pi pi-heart" [rounded]="true" severity="help" [outlined]="true" />
          <p-button icon="pi pi-times" [rounded]="true" severity="danger" [outlined]="true" />
      </div>
      <div class="flex justify-content-center flex-wrap gap-3 mb-4">
          <p-button icon="pi pi-check" [rounded]="true" [text]="true" [raised]="true" />
          <p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" [raised]="true" severity="secondary" />
          <p-button icon="pi pi-search" [rounded]="true" [text]="true" [raised]="true" severity="success" />
          <p-button icon="pi pi-user" [rounded]="true" [text]="true" [raised]="true" severity="info" />
          <p-button icon="pi pi-bell" [rounded]="true" [text]="true" [raised]="true" severity="warn" />
          <p-button icon="pi pi-heart" [rounded]="true" [text]="true" [raised]="true" severity="help" />
          <p-button icon="pi pi-times" [rounded]="true" [text]="true" [raised]="true" severity="danger" />
      </div>
      <div class="flex justify-content-center flex-wrap gap-3 mb-4">
          <p-button icon="pi pi-check" [rounded]="true" [text]="true" />
          <p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" severity="secondary" />
          <p-button icon="pi pi-search" [rounded]="true" [text]="true" severity="success" />
          <p-button icon="pi pi-user" [rounded]="true" [text]="true" severity="info" />
          <p-button icon="pi pi-bell" [rounded]="true" [text]="true" severity="warn" />
          <p-button icon="pi pi-heart" [rounded]="true" [text]="true" severity="help" />
          <p-button icon="pi pi-times" [rounded]="true" [text]="true" severity="danger" />
      </div>
    </div>
  </div>
</p-card>`,
  styleUrl: './empty.component.css',
})
export class EmptyComponent { }

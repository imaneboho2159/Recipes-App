import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <header class="flex justify-between items-center px-8 py-6 bg-green-900 text-white">
      <h1 class="text-3xl font-bold">FOODY</h1>
      <nav class="space-x-8 text-lg font-light italic">
        <a routerLink="/home" routerLinkActive="text-yellow-300" class="hover:text-yellow-300 cursor-pointer">Home</a>
        <a routerLink="/menu" routerLinkActive="text-yellow-300" class="hover:text-yellow-300 cursor-pointer">Menu</a>
        <a routerLink="/about" routerLinkActive="text-yellow-300" class="hover:text-yellow-300 cursor-pointer">About</a>
        <a routerLink="/shop" routerLinkActive="text-yellow-300" class="hover:text-yellow-300 cursor-pointer">Shop</a>
      </nav>
    </header>
  `,
 styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
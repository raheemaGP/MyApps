import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, NgClass, CurrencyPipe],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  id: number = 0;
  name: string = '';
  position: string = '';
  department: string = '';

  details: { role: [number, string] } = { role: [0, ''] };

  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 10, status: 'Available', description: 'High performance laptop', brand: 'Asus', rating: 4.5, dateAdded: '2026-01-01' },
    { id: 2, name: 'Phone', category: 'Electronics', price: 20000, stock: 0, status: 'Out of Stock', description: 'Smartphone', brand: 'Honor', rating: 4.7, dateAdded: '2026-01-05' },
    { id: 3, name: 'Keyboard', category: 'Accessories', price: 1500, stock: 5, status: 'Limited', description: 'Mechanical keyboard', brand: 'Logitech', rating: 4.3, dateAdded: '2026-01-10' }
  ];

  selectedProduct: Product | null = null;

  // Open modal
  viewProduct(product: Product) {
    this.selectedProduct = product;
  }

  // Close modal
  closeModal() {
    this.selectedProduct = null;
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
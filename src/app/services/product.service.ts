import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, description: 'High-end gaming laptop' },
    { id: 2, name: 'Smartphone', price: 800, description: 'Latest model smartphone' },
    { id: 3, name: 'Headphones', price: 150, description: 'Noise-cancelling headphones' }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  addProduct(product: Product) {
    const nextId = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    product.id = nextId;
    this.products.push(product);
  }
}
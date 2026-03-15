import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-prodlist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdlistComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  searchTerm: string = '';
  searchPlaceholder: string = 'Search by name, category, brand...';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Load products from the service
    this.products = this.productService.getProducts();
  }

  // Open modal to view product details
  viewProduct(product: Product): void {
    this.selectedProduct = product;
  }

  // Close the modal
  closeModal(): void {
    this.selectedProduct = null;
  }

  // Return filtered products based on search term
  getFilteredProducts(): Product[] {
    if (!this.searchTerm) return this.products;
    const term = this.searchTerm.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    );
  }

  // Optional: Example edit/delete methods for admin functionality
  editProduct(product: Product): void {
    alert(`Edit product ID ${product.id} - implement your logic here`);
  }

  deleteProduct(product: Product): void {
    const confirmed = confirm(`Are you sure you want to delete ${product.name}?`);
    if (confirmed) {
      this.products = this.products.filter(p => p.id !== product.id);
    }
  }
}
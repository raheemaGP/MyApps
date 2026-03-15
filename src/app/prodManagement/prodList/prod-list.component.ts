import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
=======
import { Router, ActivatedRoute } from '@angular/router';
>>>>>>> 43c60ef965704e5c977c449a32804b1ed100b1ea
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
<<<<<<< HEAD
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
=======
  selector: 'app-prod-list',                       
  templateUrl: './prod-list.component.html',       
  styleUrls: ['./prod-list.component.css']         
})
export class ProdListComponent implements OnInit {

  products: Product[] = [];
  returnUrl: string | null = null;
  searchPlaceholder: string = "Search by ProductID, Name, or role...";
  selectedID: number | null = null;
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  viewProduct(e: Product): void {
    this.selectedID = e.id;
    this.router.navigate(['/prod-management/details', e.id]);
  }

  
  get filteredProducts(): Product[] {
    const term = this.searchTerm.toLowerCase();
    return this.products.filter(p =>
      p.id.toString().includes(term) ||
      p.name.toLowerCase().includes(term) ||
      (p.description ? p.description.toLowerCase().includes(term) : false)
    );
  }
>>>>>>> 43c60ef965704e5c977c449a32804b1ed100b1ea
}
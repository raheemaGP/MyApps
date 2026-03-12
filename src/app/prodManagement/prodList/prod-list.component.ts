import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.interface";
import { CommonModule } from "@angular/common";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-prodlist',
  imports: [CommonModule],
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css'],
})
export class ProdlistComponent implements OnInit {
  products: Product[] = [];
  returnUrl: string|null = null;
  searchPlaceholder: string = 'Search by name, category, brand...'; 
  selectedId: number | null = null;
  searchTerm = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(e: Product): void {
    this.selectedId = e.id;
    this.router.navigate(['/prod-management/details', e.id]);
  }

  getFilteredProducts(): Product[] {
    if (!this.searchTerm) return this.products;
    const term = this.searchTerm.toLowerCase();
    return this.products.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    );
  }
}
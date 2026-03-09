import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
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
}
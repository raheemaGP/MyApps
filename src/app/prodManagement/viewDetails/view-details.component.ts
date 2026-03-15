import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-details',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  product: Product | undefined;
  saved = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
=======
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html'
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
>>>>>>> 43c60ef965704e5c977c449a32804b1ed100b1ea
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
<<<<<<< HEAD
    this.product = this.productService.getProductsById(id);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  save(): void {
    if (this.product) {
      this.productService.updateProduct(this.product);
      this.saved = true;
      setTimeout(() => (this.saved = false), 2500);
    }
=======
    this.productService.getProductById(id).subscribe(p => this.product = p);
>>>>>>> 43c60ef965704e5c977c449a32804b1ed100b1ea
  }
}
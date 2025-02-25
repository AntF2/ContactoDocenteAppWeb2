import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from '../services/products.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  private productosService = inject(ProductosService);

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }
}

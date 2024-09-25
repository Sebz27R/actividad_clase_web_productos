// src/productos/productos.controller.ts

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from '../producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  // GET /productos - Obtener todos los productos
  @Get()
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  // GET /productos/producto/:id - Obtener un producto por su ID
  @Get('producto/:id')
  findOne(@Param('id') id: string): Promise<Producto> {
    return this.productosService.findOne(+id); // El signo '+' convierte el string a number
  }

  // POST /productos/nuevo-producto - Crear un nuevo producto
  @Post('nuevo-producto')
  create(@Body() producto: Producto): Promise<Producto> {
    return this.productosService.create(producto);
  }

  // DELETE /productos/eliminar/:id - Eliminar un producto por su ID
  @Delete('eliminar/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productosService.remove(+id);
  }
}


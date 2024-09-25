// src/productos/productos.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  // Obtener todos los productos
  async findAll(): Promise<Producto[]> {
    return this.productosRepository.find();
  }

  // Obtener un producto por su ID
  async findOne(id: number): Promise<Producto> {
    return this.productosRepository.findOne({ where: { id } });
  }

  // Crear un nuevo producto
  async create(producto: Producto): Promise<Producto> {
    return this.productosRepository.save(producto);
  }

  // Eliminar un producto por su ID
  async remove(id: number): Promise<void> {
    await this.productosRepository.delete(id);
  }
}


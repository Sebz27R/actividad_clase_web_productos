
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto.entity'; // Importa la entidad Producto
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'Productos.db',
      entities: [Producto],
      synchronize: true, // Solo para desarrollo, sincroniza la base de datos con las entidades automáticamente
    }),
    ProductosModule, // Módulo para los productos
  ],
})
export class AppModule {}


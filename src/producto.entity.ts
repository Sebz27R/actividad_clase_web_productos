
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos') // Asegúrate de que el nombre coincida con el nombre de la tabla en la base de datos
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'real' })
  precio: number;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'text', nullable: true })
  categoria: string;

  @Column({ type: 'integer', nullable: true })
  id_detalle: number;
}

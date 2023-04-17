import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Truck {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    load: number;

    @Column()
    capacity: number;

    @Column()
    year: number;

    @Column()
    numRepairs: number;
}
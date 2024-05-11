import { Breed } from "src/breed/entities/breed.entity";
import { Shelter } from "src/shelter/entities/shelter.entity";
import { Specie } from "src/specie/entities/specie.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Specie, (specie)=> specie.id,{
        eager: true
    })
    specie: Specie;

    @ManyToOne(() => Breed, (breed)=> breed.id,{
        eager: true
    })
    breed: Breed;

    @Column()
    birth_date: Date;

    @Column()
    image_url?: string

    @ManyToOne(() => Shelter, (shelter)=> shelter.id,{
        eager: true
    })
    shelter: Shelter;
}

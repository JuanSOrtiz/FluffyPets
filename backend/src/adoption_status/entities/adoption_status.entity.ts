import { Adoption } from "src/adoption/entities/adoption.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class AdoptionStatus {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Adoption, (adoption) => adoption.adoption_status)
    adoption: Adoption[]
}

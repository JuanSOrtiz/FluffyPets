import { Adoption } from "src/adoption/entities/adoption.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class AdoptionCommentary {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @ManyToOne(()=>Adoption, (adoption)=>adoption.adoption_commentary,{
        eager:true
    })
    adoption: Adoption;
}

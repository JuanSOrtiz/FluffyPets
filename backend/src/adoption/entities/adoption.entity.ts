import { AdoptionCommentary } from "src/adoption_commentary/entities/adoption_commentary.entity";
import { AdoptionStatus } from "src/adoption_status/entities/adoption_status.entity";
import { Pet } from "src/pet/entities/pet.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Adoption {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>User, (user)=>user.adoptions,{
        eager:true
    })
    user: User;

    @ManyToOne(()=>Pet, (pet)=>pet.adoption,{
        eager:true
    })
    pet: Pet;

    @Column()
    adoption_date: Date;

    @ManyToOne(()=>AdoptionStatus, (adoption_status)=>adoption_status.adoption,{
        eager:true
    })
    adoption_status: AdoptionStatus;

    @OneToMany(() => AdoptionCommentary, (adoption_commentary) => adoption_commentary.adoption)
    adoption_commentary: AdoptionCommentary[]
}

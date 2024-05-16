import { Pet } from "src/pet/entities/pet.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdoptionStatus } from "../interfaces/adoption-status.enum";

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

    @Column({default: AdoptionStatus.ADOPTADO})
    adoption_status: AdoptionStatus;
}

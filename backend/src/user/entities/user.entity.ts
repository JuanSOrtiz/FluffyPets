import { Adoption } from "src/adoption/entities/adoption.entity";
import { Gender } from "src/gender/entities/gender.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true, nullable:false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column()
    birth_date: Date;

    @ManyToOne(() => Gender, (gender)=> gender.id,{
        eager: true
    })
    gender: Gender;

    @Column({default: "user"})
    role: string

    @OneToMany(() => Adoption, (adoption) => adoption.user)
    adoptions: Adoption[]

}
//
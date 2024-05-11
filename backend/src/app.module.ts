import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedModule } from './breed/breed.module';
import { SpecieModule } from './specie/specie.module';
import { ShelterModule } from './shelter/shelter.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GenderModule } from './gender/gender.module';

@Module({
  imports: [
    PetModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "petproject",
      autoLoadEntities: true,
      synchronize: true,
    }),
    BreedModule,
    SpecieModule,
    ShelterModule,
    UserModule,
    AuthModule,
    GenderModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

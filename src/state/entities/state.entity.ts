import { CityEntity } from '../../city/entities/city.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'state' })
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
  @OneToMany(() => CityEntity, (city) => city.state)
  cities?: CityEntity[];
}

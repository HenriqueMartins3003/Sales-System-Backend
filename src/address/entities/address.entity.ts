import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Column({ name: 'user_Id', nullable: false })
  userId: number;
  @Column({ name: 'complement', nullable: true })
  complement: string;
  @Column({ name: 'number', nullable: false })
  numberAddress: number;
  @Column({ name: 'cep', nullable: false })
  cep: number;
  @Column({ name: 'city_id', nullable: false })
  cityId: number;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updatedAt: Date;
}

import { UserEntity } from '../entities/user.entity';
import { Usertype } from '../../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '678903456',
  email: 'emialMock@mock.com',
  id: 1,
  name: 'ksdplfe',
  password: 'password',
  phone: '12345656543',
  typeUser: Usertype.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};

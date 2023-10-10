import { ReturnUserDto } from 'src/user/dtos/ReturnUser.dto';

export interface ReturnLogin {
  user: ReturnUserDto;
  accessToken: string;
}

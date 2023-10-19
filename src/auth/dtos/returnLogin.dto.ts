import { ReturnUserDto } from '../../user/dtos/ReturnUser.dto';

export interface ReturnLogin {
  user: ReturnUserDto;
  accessToken: string;
}

import { SetMetadata } from '@nestjs/common';
import { Usertype } from 'src/enum/user-type.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Usertype[]) => SetMetadata(ROLES_KEY, roles);

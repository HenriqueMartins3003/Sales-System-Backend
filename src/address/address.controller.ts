import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { Roles } from 'src/decorators/roles.decorators';
import { Usertype } from 'src/enum/user-type.enum';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(Usertype.User)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() userId: number,
  ) {
    console.log('userId', userId);
    return this.addressService.createAddress(createAddressDto, userId);
  }
}

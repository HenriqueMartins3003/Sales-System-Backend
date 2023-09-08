import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({ ttl: 36000000 }),
    TypeOrmModule.forFeature([CityEntity]),
  ],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}

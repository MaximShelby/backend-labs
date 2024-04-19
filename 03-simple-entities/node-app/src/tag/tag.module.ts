import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tag } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag], 'postgresConnection')],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {
}

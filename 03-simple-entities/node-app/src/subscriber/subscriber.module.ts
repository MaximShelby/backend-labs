import { Module } from '@nestjs/common';
import { SubscriberController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './subscriber.entity';
import { Tag } from '../tag/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber, Tag], 'mysqlConnection')],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule {
}

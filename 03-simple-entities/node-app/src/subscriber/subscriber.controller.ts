import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Subscriber } from './subscriber.entity';
import { SubscriberService } from './subscriber.service';

@ApiTags('Subscribers')
@Controller('subscribers')
export class SubscriberController {

  constructor(private readonly subscriberService: SubscriberService) {
  }

  @Post()
  create(@Body() subscriber: Subscriber) {
    return this.subscriberService.create(subscriber);
  }

  @Get()
  findAll() {
    return this.subscriberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.subscriberService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() subscriberData: Partial<Subscriber>) {
    return this.subscriberService.update(id, subscriberData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriberService.remove(id);
  }

}

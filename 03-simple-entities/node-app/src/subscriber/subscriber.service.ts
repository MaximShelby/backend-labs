import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscriber } from './subscriber.entity';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber, 'mysqlConnection')
    private subscriberRepository: Repository<Subscriber>,
  ) {
  }

  findAll(): Promise<Subscriber[]> {
    return this.subscriberRepository.find();
  }

  findOne(id: number): Promise<Subscriber | null> {
    return this.subscriberRepository.findOne({ where: { id } });
  }


  async create(subscriber: Subscriber): Promise<Subscriber> {
    return this.subscriberRepository.save(subscriber);
  }

  async update(id: number, subscriberData: Partial<Subscriber>): Promise<Subscriber> {
    const subscriber = await this.subscriberRepository.findOne({ where: { id } });
    if (!subscriber) {
      throw new Error('Subscriber not found');
    }
    return this.subscriberRepository.save({ ...subscriber, ...subscriberData });
  }

  async remove(id: string): Promise<void> {
    await this.subscriberRepository.delete(id);
  }
}

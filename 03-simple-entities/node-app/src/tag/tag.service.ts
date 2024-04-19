import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag, 'postgresConnection')
    private tagsRepository: Repository<Tag>,
  ) {
  }

  findAll(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  findOne(id: number): Promise<Tag | null> {
    return this.tagsRepository.findOne({ where: { id } });
  }


  async create(tag: Tag): Promise<Tag> {
    return this.tagsRepository.save(tag);
  }

  async update(id: number, tagData: Partial<Tag>): Promise<Tag> {
    const tag = await this.tagsRepository.findOne({ where: { id } });
    if (!tag) {
      throw new Error('Tag not found');
    }
    return this.tagsRepository.save({ ...tag, ...tagData });
  }

  async remove(id: string): Promise<void> {
    await this.tagsRepository.delete(id);
  }
}

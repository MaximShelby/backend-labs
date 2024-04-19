import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { TagModule } from './tag/tag.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [
    CatsModule,
    TagModule,
    TypeOrmModule.forRoot({
      name: 'postgresConnection',
      type: 'postgres',
      host: 'pg',
      port: 5432,
      username: 'pguser',
      password: 'password',
      database: 'nestjs',
      entities: [__dirname + '/tag/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'mysqlConnection',
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'mysqluser',
      password: 'password',
      database: 'laravel',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SubscriberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

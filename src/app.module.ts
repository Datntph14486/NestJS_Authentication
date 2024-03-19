import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dat18092002',
      database: 'nestjs_authentication',
      synchronize: true,
      entities: [],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

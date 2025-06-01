import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: 
  [TypeOrmModule.forRoot({
    // type: 'sqlite',
    // database: 'db.sqlite',
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // synchronize: true, // فقط در توسعه استفاده بشه
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',        // نام کاربر MySQL
      password: '', // رمز عبور
      database: 'nest_users',  // نام دیتابیس
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
  }),
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

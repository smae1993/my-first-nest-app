import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}
    
  
    findAll() {
      return this.usersRepo.find();
    }
  
    findOne(id: number) {
      return this.usersRepo.findOneBy({id});
    }
  
    create(data: CreateUserDto) {
      const user = this.usersRepo.create(data);
      return this.usersRepo.save(user);
    }
  
  
    async update(id: number, data: UpdateUserDto) {
      await this.usersRepo.update(id, data);
      return this.findOne(id);
    }
  
    async remove(id: number) {
      const result = await this.usersRepo.delete(id);
      return result.affected! > 0;
    }
}

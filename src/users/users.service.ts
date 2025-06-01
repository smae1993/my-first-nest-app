import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];
    private idCounter = 1;
  
    findAll(): User[] {
      return this.users;
    }
  
    findOne(id: number): User | undefined {
      return this.users.find(user => user.id === id);
    }
  
    create(createUserDto: CreateUserDto): User {
      const newUser: User = {
        id: this.idCounter++,
        ...createUserDto,
      };
      this.users.push(newUser);
      return newUser;
    }
  
    update(id: number, updateUserDto: UpdateUserDto): User | undefined {
      const user = this.findOne(id);
      if (!user) return undefined;
      Object.assign(user, updateUserDto);
      return user;
    }
  
    remove(id: number): boolean {
      const index = this.users.findIndex(user => user.id === id);
      if (index === -1) return false;
      this.users.splice(index, 1);
      return true;
    }
}

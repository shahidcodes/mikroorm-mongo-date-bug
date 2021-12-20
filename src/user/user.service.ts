import { wrap } from '@mikro-orm/core';
import { EntityManager, EntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User) private userRepository: EntityRepository<User>;
  @InjectRepository(Book) private bookRepository: EntityRepository<Book>;

  constructor(private readonly em: EntityManager) {}

  async test(body: { books: string[] }) {
    const user = new User();
    wrap(user).assign({
      meta: {
        lastLoginAt: new Date(),
      },
      dateWorkFineHere: new Date(),
      bookInfo: {
        books: body.books,
      },
    });
    await this.userRepository.persistAndFlush(user);
    return user;
  }

  async find() {
    return this.userRepository.find({}, ['bookInfo.books']);
  }

  async createBook(body: any) {
    const book = this.bookRepository.create(body);
    await this.bookRepository.persistAndFlush(book);
    return book;
  }
}

import {
  Collection,
  Embeddable,
  Embedded,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Book } from './book.entity';

@Embeddable()
export class MetaData {
  @Property()
  lastLoginAt: Date;
}

@Embeddable()
export class BookInfo {
  @ManyToMany(() => Book)
  books = new Collection<Book>(this);
}

@Entity()
export class User {
  @PrimaryKey()
  _id: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  name: string;

  @Embedded({ object: true })
  meta: MetaData;

  @Property()
  dateWorkFineHere: Date;

  @Embedded(() => BookInfo, { object: true })
  bookInfo: BookInfo;
}

import {
  Embeddable,
  Embedded,
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

@Embeddable()
export class MetaData {
  @Property()
  lastLoginAt: Date;
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
}

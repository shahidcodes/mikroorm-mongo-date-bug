import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: 'mongo',
      clientUrl: process.env.MONGO_URI,
      dbName: 'mikroorm_test',
      entities: [
        'dist/**/entities/*.entity.js',
        'dist/**/entities/*.schema.js',
      ],
      entitiesTs: [
        'src/**/entities/*.entity.ts',
        'src/**/entities/*.schema.ts',
      ],
      debug: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, NoteModule, AuthModule,MongooseModule.forRoot(process.env.connect_string)],
  controllers: [],
  providers: [],
})
export class AppModule {}

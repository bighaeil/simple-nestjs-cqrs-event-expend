import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [UserModule, PostModule, TagModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

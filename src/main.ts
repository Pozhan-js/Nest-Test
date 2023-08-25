/*
 * @Author: hashMi 854059946@qq.com
 * @Date: 2023-08-18 13:05:07
 * @LastEditors: hashMi 854059946@qq.com
 * @LastEditTime: 2023-08-18 13:34:04
 * @FilePath: /nest-test/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 指定静态资源位置位public
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' });
  await app.listen(3000);
}
bootstrap();

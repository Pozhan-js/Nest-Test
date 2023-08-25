/*
 * @Author: hashMi 854059946@qq.com
 * @Date: 2023-08-18 13:05:07
 * @LastEditors: hashMi 854059946@qq.com
 * @LastEditTime: 2023-08-18 13:36:16
 * @FilePath: /nest-test/src/app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}

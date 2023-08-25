/*
 * @Author: hashMi 854059946@qq.com
 * @Date: 2023-08-18 13:19:34
 * @LastEditors: hashMi 854059946@qq.com
 * @LastEditTime: 2023-08-21 09:34:17
 * @FilePath: /nest-test/src/person/person.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }



  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}

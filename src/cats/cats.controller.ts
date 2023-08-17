import { Controller, Get } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}

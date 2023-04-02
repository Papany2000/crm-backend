
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OrderService } from '../services/order.servise';
import * as xlsx from 'xlsx';
import { OrderDTO } from 'src/schemas/order.schema';

@Controller()
export class ExcelParserController {
    constructor(private readonly orderService: OrderService, ) { }
  @Post('parse-excel-order')
  @UseInterceptors(FileInterceptor('file'))
  async parseExcelOrder(@UploadedFile() file): Promise<any> {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: OrderDTO[] = xlsx.utils.sheet_to_json(worksheet, { header: ['contractId', 'number', 'description', 'type', 'supportEmail', 'supportEmailTemplate'] });
    return this.orderService.createBulk(data);
  }
  /*@Post('parse-excel-company')
  @UseInterceptors(FileInterceptor('file'))
  async parseExcelCompany(@UploadedFile() file): Promise<any> {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: OrderDTO[] = xlsx.utils.sheet_to_json(worksheet, { header: ['contractId', 'number', 'description', 'type', 'supportEmail', 'supportEmailTemplate'] });
    return this.orderService.createBulk(data);
  }
  @Post('parse-excel-contract')
  @UseInterceptors(FileInterceptor('file'))
  async parseExcelContract(@UploadedFile() file): Promise<any> {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: OrderDTO[] = xlsx.utils.sheet_to_json(worksheet, { header: ['contractId', 'number', 'description', 'type', 'supportEmail', 'supportEmailTemplate'] });
    return this.orderService.createBulk(data);
  }*/



}
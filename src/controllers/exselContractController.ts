import { OrganizationController } from './organization.controller';

import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ContractService } from '../services/contract.service';
import * as xlsx from 'xlsx';
import { ContractDTO } from 'src/schemas/contract.schema';

@Controller()
export class ExcelParserContractController {
    constructor(private readonly conractService: ContractService, ) { }
  @Post('parse-excel-contract')
  @UseInterceptors(FileInterceptor('file'))
  async parseExcelContract(@UploadedFile() file): Promise<any> {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: ContractDTO[] = xlsx.utils.sheet_to_json(worksheet, { header: ['organizationId', 'number', 'description', 'type', 'fileUuid',] });
    console.log(data)
    return this.conractService.createBulk(data);
  }



}
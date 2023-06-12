
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OrganizationService } from '../services/organization.service';
import * as xlsx from 'xlsx';
import { OrganizationDTO } from 'src/schemas/organizanion.schema';

@Controller()
export class ExcelParserOrganizationController {
    constructor(private readonly organizationService: OrganizationService, ) { }
   @Post('parse-excel-company')
  @UseInterceptors(FileInterceptor('file'))
  async parseExcelCompany(@UploadedFile() file): Promise<any> {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: OrganizationDTO[] = xlsx.utils.sheet_to_json(worksheet, { header: ['name', 'phone', 'email', 'manager', 'managerWorkPhone', 'managerEmail', 'supportEmail', 'supportPhone', 'id'] });
    return this.organizationService.createBulk(data);
  }
}
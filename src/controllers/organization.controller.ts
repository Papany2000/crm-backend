import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { OrganizationService } from '../services/organization.service';
import { Organization, OrganizationDTO} from '../schemas/organizanion.schema';


@Controller()
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) { }

  @Post('/organization/create')
  createOrganization(@Body() organization: OrganizationDTO): Promise<Organization> {
    return this.organizationService.create(organization);
  }

  @Get('/organization')
  getOrganizations(@Query() query): Promise<Organization[]> {
    return this.organizationService.findAll(query);
  }

  @Delete('/organization/:id')
  deleteOrganization(@Param('id') id: string): Promise<Organization> {
    return this.organizationService.removeOrganization(id);
  }
  @Get('/organization/:id')
  getOrganization(@Param('id') id: string): Promise<Organization> {
    return this.organizationService.getOrganization(id);
  }
}
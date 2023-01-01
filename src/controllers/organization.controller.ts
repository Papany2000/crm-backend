import { Controller, Get, Post, Body, Delete, Param, Query, UseGuards } from '@nestjs/common';
import { OrganizationService } from '../services/organization.service';
import { Organization, OrganizationDTO} from '../schemas/organizanion.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) { }

  @UseGuards(JwtAuthGuard)
  @Post('/organization/create')
  createOrganization(@Body() organization: OrganizationDTO): Promise<Organization> {
    return this.organizationService.create(organization);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/organization')
  getOrganizations(@Query() query): Promise<Organization[]> {
    return this.organizationService.findAll(query);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/organization/:id')
  deleteOrganization(@Param('id') id: string): Promise<Organization> {
    return this.organizationService.removeOrganization(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/organization/:id')
  getOrganization(@Param('id') id: string): Promise<Organization> {
    return this.organizationService.getOrganization(id);
  }
}
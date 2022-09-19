import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Organization, OrganizationDocument, OrganizationDTO } from '../schemas/organizanion.schema';

@Injectable()
export class OrganizationService {
  constructor(@InjectModel(Organization.name) private organizationModel: Model<OrganizationDocument>) { }

  async create(createOrganizationDto: OrganizationDTO): Promise<Organization> {
    const createdOrganization = new this.organizationModel(createOrganizationDto);
    return createdOrganization.save();
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationModel.find().exec();
  }
  async removeOrganization(id: string): Promise<Organization> {
    return this.organizationModel.findByIdAndDelete(id)
  }
  async getOrganization(id: string): Promise<Organization> {
    return this.organizationModel.findById(id)
  }
}
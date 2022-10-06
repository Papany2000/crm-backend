import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contract, ContractDocument, ContractDTO } from '../schemas/contract.schema';

@Injectable()
export class ContractService {
  constructor(@InjectModel(Contract.name) private contractModel: Model<ContractDocument>) { }

  async create(createContractDto: ContractDTO): Promise<Contract> {
    const createdContract = new this.contractModel(createContractDto);
    return createdContract.save();
  }

  async findAll(param): Promise<Contract[]> {
    return this.contractModel.find(param);
  }

  async removeContract(id: string): Promise<Contract> {
    return this.contractModel.findByIdAndDelete(id)
  }
  async getContract(id: string): Promise<Contract[]> {
    return this.contractModel.find({organizationId: id})
  }
}
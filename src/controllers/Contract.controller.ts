import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ContractService } from '../services/contract.service';
import { Contract, ContractDTO} from '../schemas/contract.schema';


@Controller()
export class ContractController {
  constructor(private readonly contractService: ContractService) { }

  @Post('/contract/create')
  createContract(@Body() contract: ContractDTO): Promise<Contract> {
    return this.contractService.create(contract);
  }

  @Get('/contract')
  getContracts(): Promise<Contract[]> {
    return this.contractService.findAll();
  }

  @Delete('/contract/:id')
  deleteContract(@Param('id') id: number): Promise<Contract> {
    return this.contractService.removeContract(id);
  }
  @Get('/contract/:id')
  getContract(@Param('id') id: number): Promise<Contract> {
    return this.contractService.getContract(id);
  }
}
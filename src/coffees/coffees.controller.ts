import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeService: CoffeesService){}

    @Get()
    findAll(@Query() paginationQuery){
        //const {limit, offset} = paginationQuery;
        return this.coffeeService.findAll();
    }

    // @Get(':id')
    // _findOne(@Param() params){
    //     return `The id is ${params.id}`
    // }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coffeeService.findOne(id);
    }

    @Post()
    create(@Body() createCoffeeDto:CreateCoffeeDto){
        return this.coffeeService.create(createCoffeeDto);
    }

    // @Post()
    // create(@Body('name') name:string){
    //     return name;
    // }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeeService.remove(id)
    }
}

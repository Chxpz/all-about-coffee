import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavour')
    findAll(){
        return 'This return coffee';
    }

    @Get(':id')
    _findOne(@Param() params){
        return `The id is ${params.id}`
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return `The id is ${id}`
    }

    @Post()
    create(@Body() body){
        return body;
    }

    // @Post()
    // create(@Body('name') name:string){
    //     return name;
    // }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return `This action updates ${id} coffee`
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `This actiom removes ${id} coffee`;
    }
}

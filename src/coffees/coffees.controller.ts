import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

    // @Post()
    // create(@Body() body){
    //     return body;
    // }

    @Post()
    create(@Body('name') name:string){
        return name;
    }
}

import { Body, Controller, Get, HttpCode, Param, Post,HttpStatus, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Res() response){
        response.status(200).send('This return coffee');
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
    @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return body;
    }

    // @Post()
    // create(@Body('name') name:string){
    //     return name;
    // }
}

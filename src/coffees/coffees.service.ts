import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] =[
        {
            id:1,
            name:'xpto',
            brand:'xyz',
            flavors:['chocolate', 'vanila'],
        }
    ];

    findAll(){
        return this.coffees;
    }

    findOne(id:string){
        return this.coffees.find(item=> item.id === +id)
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto)
    }

    update(id:string, updateCofeeDto:any){
        const existingCofee = this.findOne(id);
        if (existingCofee){
            
        }
    }

    remove(id:string){
        const coffeeIndex = this.coffees.findIndex(item=>item.id === +id);
        if (coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex,1);
        }
    }
}

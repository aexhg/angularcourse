
import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService{

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor( private counterService: CounterService){

    }
    
    updateUserToInactive( id: number){
       var user =  this.activeUsers.splice(id,1);
        this.inactiveUsers.push(user[0]);
        this.counterService.addToInactive();
    }

    updateUSerToActive( id: number){
        var user = this.inactiveUsers.splice(id,1);
        this.activeUsers.push(user[0]);
        this.counterService.addToActive();
    }

}
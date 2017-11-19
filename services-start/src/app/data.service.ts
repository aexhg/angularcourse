
import { Injectable, EventEmitter} from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class DataService{

    constructor( private logger: LoggingService ){}
    accounts  = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];    

      statusUpdated = new EventEmitter<string>();
      addAccount( name: string , status: string){
          this.accounts.push( { name: name, status: status});
          this.logger.log('A server status changed, new status: ' + status);
      }

      updateAccount( id: number,  status: string){
        this.accounts[id].status = status;
        this.logger.log('A server status changed, new status: ' + status);        
      }

}
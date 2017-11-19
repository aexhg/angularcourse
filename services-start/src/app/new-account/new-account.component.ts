import { Component } from '@angular/core';
import { LoggingService } from './../logging.service';
import { DataService } from './../data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {


  constructor(private logger: LoggingService, private data: DataService)
  { 

    this.data.statusUpdated.subscribe(
      (status:string) =>
      alert( 'New status' + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.data.addAccount(
      accountName,
      accountStatus
    );
    //this.logger.log('A server status changed, new status: ' + accountStatus);
  }
}

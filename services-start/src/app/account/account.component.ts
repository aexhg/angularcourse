import { Component, Input} from '@angular/core';
import { LoggingService } from './../logging.service';
import { DataService } from './../data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  constructor(private logger:LoggingService, private data: DataService){

  }

  onSetTo(status: string) {
    this.data.updateAccount(this.id, status);
    this.data.statusUpdated.emit(status);
  }
}

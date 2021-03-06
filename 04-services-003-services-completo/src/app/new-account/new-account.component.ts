import { Component, EventEmitter, Output } from '@angular/core';
import AccountService from '../AccountService';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [AccountService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountService: AccountService){
    this.accountService.statusUpdate.subscribe(status => {
      alert(status)
    })
  }
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded({
      name: accountName,
      status: accountStatus
    })
    console.log('A server status changed, new status: ' + accountStatus);
  }
}

import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountApexService.getAccounts';

export default class WireFunctionWithApex extends LightningElement {

  @track searchKey;
  @track accounts;
  @track error;

  @wire(getAccounts,{strAccountName : '$searchKey'})
   wiredAccounts({data,error}){
    if(data){
      this.accounts = data;
      this.error = undefined;
    }
    else if(error){
      this.accounts = undefined;
      this.error = error;
    }
   }
   handleKeyChange(event){
    this.searchKey = event.target.value;
   }
}
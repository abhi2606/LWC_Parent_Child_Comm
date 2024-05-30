import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountApexService.getAccounts';
//import getAccounts from '..c/classes/AccountService.getAccounts';

export default class WirePropertyWithApex extends LightningElement {

  @track searchKey;
  @wire(getAccounts, {strAccountName : '$searchKey'}) accounts;
  
  handleChange(event){
    console.log(event.target.value);
    this.searchKey = event.target.value;
  }
}
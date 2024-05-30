import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountApexService.getAccounts';
export default class ImperativeMethodWithApex extends LightningElement {

  @track accounts;
  @track error;

  handleKeyChange(event){
    const searchKey = event.target.value;
    getAccounts({strAccountName : searchKey})
    .then(result => {
      this.accounts = result;
      this.error = undefined;
    })

    .catch(error =>{
      this.error = error;
      this.accounts = undefined;
    })
  } 
}
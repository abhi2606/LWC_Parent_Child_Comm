import { LightningElement, track, wire } from 'lwc';
import { createMessageContext, releaseMessageContext,publish } from 'lightning/messageService';
import SAMPLEMS from '@salesforce/messageChannel/sampleMessageChannel__c';

export default class IndependentComponentThree extends LightningElement {

  context = createMessageContext();

  publishMC(event){
    console.log(event.target.value + 'Button Clicked');
    const message = {
      recordId : 'Sample Record Id',
      recordData : 'I am Data'
    }
    publish(this.context,SAMPLEMS,message);
  }
  disconnectedCallback(){
    releaseMessageContext(this.context);
  }
} 
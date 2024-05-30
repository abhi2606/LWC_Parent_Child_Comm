import { LightningElement, wire, track } from 'lwc';
import { APPLICATION_SCOPE, createMessageContext,releaseMessageContext,subscribe,unsubscribe } from 'lightning/messageService';
//import SAMPLEMS from '@salesforce/messageChannels/sampleMessageChannel__c';
import SAMPLEMS from '@salesforce/messageChannel/sampleMessageChannel__c';

export default class IndependentComponentFour extends LightningElement {

  context = createMessageContext();
  subscription = null;
  @track receivedMessage = {};

  connectedCallback(){
    console.log(this.subscription + ' ***Subscription');
    if(this.subscription){
      return;
    }
    this.subscription = subscribe(this.context,SAMPLEMS,(message)=>{
      this.handleMessage(message);
    },
    {
      scope:APPLICATION_SCOPE
    });
  }

  handleMessage(message){
    console.log('Message Received : '+ JSON.stringify(message));
    this.receivedMessage = JSON.stringify(message);
    console.log('Final Message Received : '+ this.receivedMessage);
  }

  disconnectedCallback(){
    releaseMessageContext(this.context);
  }
}
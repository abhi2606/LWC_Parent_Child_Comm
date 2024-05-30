import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class IndependentComponentTwo extends LightningElement {

  messageData;
  connectedCallback(){
    this.subcribeComponent();
  }

  subcribeComponent(){
    pubsub.subscribe('messagefromCompA',(message)=>{
      this.messageData = message;
    });
  }
}
import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class IndependentComponentOne extends LightningElement {

  inputMessage;
  inputTextHandler(event){
    this.inputMessage = event.target.value
  }
  handleClick(){
    pubsub.publish('messagefromCompA' , this.inputMessage);
    console.log('Published Comp A');
  }
}
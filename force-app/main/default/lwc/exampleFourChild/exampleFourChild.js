import { LightningElement, api } from 'lwc';

export default class ExampleFourChild extends LightningElement {

  @api
  play(){
    console.log("Played");
  }
  @api
  pause(){
    console.log("Paused");
  }
}
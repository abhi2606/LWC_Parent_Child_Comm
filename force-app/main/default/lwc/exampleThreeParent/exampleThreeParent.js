import { LightningElement } from 'lwc';

export default class ExampleThreeParent extends LightningElement {
  nameparent;
  nameChangeParent(event){
    this.nameparent = event.detail;
  }
}
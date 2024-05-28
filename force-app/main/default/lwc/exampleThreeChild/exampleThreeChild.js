import { LightningElement } from 'lwc';

export default class ExampleThreeChild extends LightningElement {
  name;
  nameChangeHandler(event){
    this.name = event.target.value;
    const myevent = new CustomEvent("changecustomevent",{
      detail : this.name
    });
    this.dispatchEvent(myevent);
  }
} 
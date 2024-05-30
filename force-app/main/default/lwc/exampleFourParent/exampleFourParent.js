import { LightningElement } from 'lwc';

export default class ExampleFourParent extends LightningElement {

  handlePlay(){
    this.template.querySelector('c-example-four-child').play();
  }

  handlePause(){
    this.template.querySelector('c-example-four-child').pause();
  }
}
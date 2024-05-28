import { LightningElement, api } from 'lwc';

export default class ExampleTwoChild extends LightningElement {
userdetails;
// use of getter ans setter methods in LWC
@api
get parentInfo(){
  return this.userdetails;
}
set parentInfo(data){
  this.userdetails = data;
}
}
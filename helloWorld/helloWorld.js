import { LightningElement } from "lwc";
export default class HelloWorld extends LightningElement {
  greeting = "Abhishek";
  todayDate;
  get capitalizedGreeting() {
    //this.greeting = event.target.value;
    return `Hello ${this.greeting.toUpperCase()}`;
  }

  todayDate = new Date().toDateString();
}

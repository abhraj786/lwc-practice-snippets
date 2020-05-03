import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexWirePropertyToFunction extends LightningElement {

    @wire(getContactList)contacts;
}
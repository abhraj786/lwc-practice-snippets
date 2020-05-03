import { LightningElement, wire} from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexWireMethodToFunction extends LightningElement {

    contacts;
    error;

    @wire(getContactList)
    getContactListUI({data, error}){
        if(data){
            this.contacts = data;
            this.error = undefined;
        }
        if(error){
            this.contacts = undefined;
            this.error = error;
        }
    }

}
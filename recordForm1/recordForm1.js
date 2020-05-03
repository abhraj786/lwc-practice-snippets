import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class RecordForm1 extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD,WEBSITE_FIELD];

    handleSuccess(event){
        console.log(event.detail);
    }

    handleSubmit(event){
        console.log(`Record Id${event.detail.id}`);
    }

}
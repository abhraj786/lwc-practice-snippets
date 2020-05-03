public with sharing class ContactController {
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        return [Select id, name from contact limit 10];
    }
}

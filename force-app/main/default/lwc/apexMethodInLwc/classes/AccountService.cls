public with sharing class AccountApexService {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String strAccountName){
        String searchString = '%'+strAccountName+'%';
        return [SELECT Id, Name, AccountNumber FROM Account WHERE Name like :searchString];
    }
}
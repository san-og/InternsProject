public with sharing class DashboardController {
        
    @AuraEnabled(cacheable=true)
    public static List<SObject> getRecords() {
        return [SELECT Id, Name, Type, Site, Phone, AnnualRevenue, Industry FROM Account];
    }

}
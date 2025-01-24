public with sharing class DashboardController {
        
    @AuraEnabled(cacheable=true)
    public static List<SObject> getRecords() {
        return [SELECT Id, Name, Type, Site, Phone, AnnualRevenue FROM Account];
    }

    @AuraEnabled(cacheable=true)
    public static SObject getRecordDetail(Id recordId) {
        return [SELECT Id, Name, Type, Site, Phone, AnnualRevenue FROM Account WHERE Id = :recordId LIMIT 1];
    }


}
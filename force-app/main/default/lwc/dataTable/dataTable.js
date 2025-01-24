import { LightningElement, wire } from 'lwc';
import getRecords from '@salesforce/apex/DashboardController.getRecords';

export default class BasicDatatable extends LightningElement {
    records;
    columns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Site', fieldName: 'site', type: 'url' },
        { label: 'Phone', fieldName: 'phone', type: 'phone' },
        { label: 'AnnualRevenue', fieldName: 'AnnualRevenue', type: 'currency' },
    ];
    

    @wire(getRecords)
    wiredRecords({ error, data }) {
        if (data) {
            this.records = data;
        } else if (error) {
            console.error('Error fetching records:', error);
        }
    }

    handleRowAction(event) {
        const recordId = event.detail.row.Id;
        const recordSelectEvent = new CustomEvent('recordselect', {
            detail: { recordId }
        });
        this.dispatchEvent(recordSelectEvent);
    }

    refreshData() {
        const refreshEvent = new CustomEvent('refreshdata');
        this.dispatchEvent(refreshEvent);
    }
}
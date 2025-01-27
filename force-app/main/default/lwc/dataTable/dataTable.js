import { LightningElement, wire } from 'lwc';
import getRecords from '@salesforce/apex/DashboardController.getRecords';

export default class DataTable extends LightningElement {
    records;
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Site', fieldName: 'Site', type: 'url' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    ];
    

    @wire(getRecords)
    wiredRecords({ error, data }) {
        if (data) {
            this.records = data;
        } else if (error) {
            console.error('Error fetching records:', error);
        }
    }

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        if (selectedRows.length > 0) {
            const recordId = selectedRows[0].Id;
            const recordSelectEvent = new CustomEvent('recordselect', {
                detail: { recordId }
            });
            this.dispatchEvent(recordSelectEvent);
        }
    }

    refreshData() {
        const refreshEvent = new CustomEvent('refreshdata');
        this.dispatchEvent(refreshEvent);
    }
}
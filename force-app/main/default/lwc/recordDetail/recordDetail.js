import { LightningElement, wire, api } from 'lwc';
import getRecordDetail from '@salesforce/apex/DashboardController.getRecordDetail';

export default class RecordDetail extends LightningElement {
    @api recordId;
    record;
    error;

    @wire(getRecordDetail, { recordId: '$recordId' })
    wiredRecord({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
        }else if (error){
            this.record = undefined;
            this.error = 'Error fetching record details.';
            console.error(this.error);
        }
    }
}

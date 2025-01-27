import { LightningElement } from 'lwc';

export default class Dashboard extends LightningElement {
    selectedRecordId;

    handleRecordSelection(event) {
        this.selectedRecordId = event.detail.recordId;
        console.log('Selected Record ID:', this.selectedRecordId);
        
    }

    handleDataRefresh() {
        
    }
}
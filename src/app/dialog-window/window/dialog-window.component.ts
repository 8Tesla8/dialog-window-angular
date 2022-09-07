import { Component } from '@angular/core';
import { DialogButtonModel } from '../model/dialog-button.model';
import { DialogWindowModel } from '../model/dialog-window.model';
import { DialogStorageService } from '../service/dialog-storage.service';

@Component({
    selector: 'app-dialog-window',
    templateUrl: './dialog-window.component.html',
    styleUrls: ['./dialog-window.component.scss'],
})
export class DialogWindowComponent {
    public visible: boolean = false;

    model: DialogWindowModel;

    constructor(
        private readonly _dialogStorageService :DialogStorageService
    ) {
        this._dialogStorageService.observableDataForWindow().subscribe(
            data =>{
                this.visible = !this.isModelEmpty(data);
                this.model = data; 
            });
    }

    public buttonClick(btn: DialogButtonModel): void {
        this.visible = false;

        if(btn.clickHandler !== undefined) {
            btn.clickHandler(btn);
        }

        // this._dialogStorageService.setDataFromWindow(btn);
    }

    isModelEmpty(model: DialogWindowModel): boolean {
        if(!model.message && !model.title && !model.buttons)
            return true;

        return false;
    }
}

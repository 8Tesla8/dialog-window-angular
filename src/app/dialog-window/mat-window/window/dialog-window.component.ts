import {
    Component,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogButtonModel, DialogWindowModel } from '../models';

@Component({
    selector: 'app-dialog-window',
    templateUrl: './dialog-window.component.html',
    styleUrls: ['./dialog-window.component.scss'],
})
export class DialogWindowComponent implements OnInit {
    model: DialogWindowModel;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private readonly _dialogRef: MatDialogRef<DialogWindowComponent>
    ) {
        this.model = data.model;
    }

    buttonClick(btn: DialogButtonModel): void {
        this._dialogRef.close(btn);
    }

    ngOnInit() {}
}

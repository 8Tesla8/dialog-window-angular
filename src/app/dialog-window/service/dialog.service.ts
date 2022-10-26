import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { DialogButtonColor, DialogButtonModel, DialogButtonType } from "../model/dialog-button.model";
import { DialogWindowModel } from "../model/dialog-window.model";
import { DialogStorageService } from "./dialog-storage.service";

@Injectable()
export class DialogWindowService{

    constructor(private readonly _dialogStorageService: DialogStorageService) { }

    public showDialog(title:string, message:string, buttons:DialogButtonModel[]):void{
        let model = {
            title: title,
            message: message,
            buttons: buttons,
        } as DialogWindowModel;

        this._dialogStorageService.setDataForWindow(model);
    }

    public showDialogOk(title:string, message:string):Observable<DialogButtonModel>{
        let subject = new Subject<DialogButtonModel>();

        let buttons = [
            {
                id: DialogButtonType.OK,
                text: "OK", 
                color:DialogButtonColor.NORMAL,
                clickHandler: (btn) => subject.next(btn),
            } as DialogButtonModel
        ];

        this.showDialog(title, message, buttons);

        return subject.asObservable();
    }

    public showDialogCancelOK(title:string, message:string):Observable<DialogButtonModel>{
        let subject = new Subject<DialogButtonModel>();

        let buttons = [
            {
                id: DialogButtonType.CANCEL,
                text: "CANCEL", 
                color:DialogButtonColor.RED,
                clickHandler: (btn) => subject.next(btn),
            } as DialogButtonModel,
            {
                id: DialogButtonType.OK,
                text: "OK", 
                color:DialogButtonColor.NORMAL,
                clickHandler: (btn) => subject.next(btn),
            } as DialogButtonModel,
        ];

        this.showDialog(title, message, buttons);

        return subject.asObservable();
    }

    public closeDialog():void{
        this._dialogStorageService.setDataForWindow(undefined);
    }
}
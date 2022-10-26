import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { DialogWindowModel } from "../model/dialog-window.model";

@Injectable({
    providedIn: 'root',
})
export class DialogStorageService{

    public _dataForWindow = new Subject<DialogWindowModel>();
    
    public setDataForWindow(dialogWindowModel:DialogWindowModel | undefined){
        this._dataForWindow.next(dialogWindowModel);
    }

    public observableDataForWindow():Observable<DialogWindowModel>{
        return this._dataForWindow.asObservable();
    }

}
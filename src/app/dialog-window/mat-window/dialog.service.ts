import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { DialogButtonColor, DialogButtonModel, DialogButtonType, DialogTextModel, DialogTitleModel, DialogWindowModel, DialogWindowSettingsModel } from '../models';
import { DialogWindowComponent } from '../window/dialog-window.component';

@Injectable()
export class DialogService {

    constructor(
        private readonly _dialog: MatDialog,
        ) {}


    public showDialog(dialogModel:DialogWindowSettingsModel, buttons:DialogButtonModel[]): Observable<DialogButtonModel> {
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }   


    //#region one button

    public showDialogOk(dialogModel:DialogWindowSettingsModel) : Observable<DialogButtonModel> {
        let buttons =this.convertButtons([DialogButtonType.OK]); 
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }

    public showDialogProcced(dialogModel:DialogWindowSettingsModel): Observable<DialogButtonModel> {
        let buttons =this.convertButtons([DialogButtonType.PROCEED]); 
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }

    public showDialogClose(dialogModel:DialogWindowSettingsModel): Observable<DialogButtonModel> {
        let buttons =this.convertButtons([DialogButtonType.CLOSE]); 
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }

    public showDialogCloseRed(dialogModel:DialogWindowSettingsModel): Observable<DialogButtonModel> {
        let buttons =this.convertButtons([DialogButtonType.CLOSE_RED]); 
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }

    public showDialogCancel(dialogModel:DialogWindowSettingsModel): Observable<DialogButtonModel> {
        let buttons =this.convertButtons([DialogButtonType.CANCEL]); 
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }

    //#endregion one button


    //#region two buttons
    public showDialogCancelOk(dialogModel:DialogWindowSettingsModel): Observable<DialogButtonModel> {
        let buttons =this.convertButtons([DialogButtonType.CANCEL, DialogButtonType.OK]); 
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }

    public showDialogCancelProcced(dialogModel:DialogWindowSettingsModel): Observable<DialogButtonModel> {
        let buttons =this.convertButtons([DialogButtonType.CANCEL, DialogButtonType.PROCEED]); 
        let model = this.transformModel(dialogModel, buttons);
        return this.showDialogWindow(model);
    }
    //#endregion two buttons


    private convertButtons(buttonType:DialogButtonType[]):DialogButtonModel[]{
        let buttons:any[] = [];

        buttonType.forEach(type =>{
            let btn = null;

            if(type === DialogButtonType.OK){
                btn = {
                    id: DialogButtonType.OK,
                    translationKey: "i18n.Generic.Ok", 
                    color:DialogButtonColor.NORMAL,
                } as DialogButtonModel; 
            }
            else if(type === DialogButtonType.PROCEED){
                btn = {
                    id: DialogButtonType.PROCEED,
                    translationKey: "i18n.Generic.Close", 
                    color:DialogButtonColor.NORMAL,
                }as DialogButtonModel;
            }
            else if(type === DialogButtonType.CLOSE){
                btn = {
                    id: DialogButtonType.CLOSE,
                    translationKey: "i18n.Generic.Close", 
                    color:DialogButtonColor.NORMAL,
                }as DialogButtonModel;
            }
            //red color
            else if(type === DialogButtonType.CLOSE_RED){
                btn = {
                    id: DialogButtonType.CLOSE,
                    translationKey: "i18n.Generic.Close", 
                    color:DialogButtonColor.RED,
                }as DialogButtonModel;
            }
            else if(type === DialogButtonType.CANCEL){
                btn = {
                    id: DialogButtonType.CANCEL,
                    translationKey: "i18n.Generic.Cancel", 
                    color:DialogButtonColor.RED,
                }as DialogButtonModel;
            }
            else{
                console.error("Do not have settings for type DialogButtonType: " + type);
            }

            buttons.push(btn);
        });

        return buttons;
    }

    private transformModel(dialogSettingsModel: DialogWindowSettingsModel, buttons: DialogButtonModel[]):DialogWindowModel{
        let model = {
            title: {
                translationKey: dialogSettingsModel.titleTranslationKey,
                additionalText: dialogSettingsModel.titleAdditionText,
                icon: dialogSettingsModel.titleIcon,
                iconPath: dialogSettingsModel.titleIconPath,
            } as DialogTitleModel,
            message: {
                translationKey: dialogSettingsModel.messageTranslationKey,
                additionalText: dialogSettingsModel.messageAdditionText,
            } as DialogTextModel,
            buttons: buttons
        } as DialogWindowModel;


        return model;
    }

    private showDialogWindow(dialogModel: DialogWindowModel): Observable<DialogButtonModel>{
        const dialogRef = this._dialog.open(DialogWindowComponent, {
            id: 'dialog-window-custom', // styles in angular-material-styles.scss
            data: { model: dialogModel },
        });

        var subject = new Subject<DialogButtonModel>();

        dialogRef.afterClosed().subscribe((result: DialogButtonModel) => {
            subject.next(result);
        });

        return subject.asObservable();
    }
}

import { DialogTextModel } from "./dialog-text.model";

export class DialogButtonModel extends DialogTextModel {
    public icon: string; //google fonts
    public iconPath: string;

    public id:string; // DialogButtonType
    public color:DialogButtonColor;

    public data:any;

    public clickHandler: (buttonModel:DialogButtonModel) => void;
}

export enum DialogButtonColor{
    RED = "red",
    NORMAL = "normal",
}


export enum DialogButtonType{
    OK = "ok",
    PROCEED = "proceed",
    CLOSE = "close",

    //red 
    CANCEL = "cancel",
    CLOSE_RED = "close_red",
}

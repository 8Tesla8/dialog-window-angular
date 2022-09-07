import { DialogButtonModel, DialogTextModel, DialogTitleModel } from ".";

export class DialogWindowModel{
    public title: DialogTitleModel;
    public message: DialogTextModel;
    public buttons:DialogButtonModel[];
}
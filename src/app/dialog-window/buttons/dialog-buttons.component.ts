import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogButtonColor, DialogButtonModel } from '../models';

@Component({
    selector: 'app-dialog-buttons',
    templateUrl: './dialog-buttons.component.html',
    styleUrls: ['./dialog-buttons.component.scss']
})

export class DialogButtonsComponent implements OnInit {

    @Input() 
    public buttons: DialogButtonModel[];

    @Output() onButtonClick = new EventEmitter<DialogButtonModel>();
    
    constructor(
    ) {
    }

    ngOnInit() {
    }

    public buttonClick(btn:DialogButtonModel):void {
        if(btn.clickHandler){
            btn.clickHandler(btn);
        }

        this.onButtonClick.emit(btn);
    }

    public btnColor(btn:DialogButtonModel):string{
        let color = btn.color;

        if(!color){
            color = DialogButtonColor.NORMAL;
        }


        if(btn.color == DialogButtonColor.RED){
            return "alert-round-button";
        }

        return "standart-round-button";
    }

}

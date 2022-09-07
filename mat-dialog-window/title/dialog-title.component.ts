import { Component, Input, OnInit } from '@angular/core';
import { DialogTitleModel } from '../models';

@Component({
    selector: 'app-dialog-title',
    templateUrl: './dialog-title.component.html',
    styleUrls: ['./dialog-title.component.scss']
})

export class DialogTitleComponent implements OnInit {

    @Input() 
    public titleModel:DialogTitleModel = new DialogTitleModel();

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

}

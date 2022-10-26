import { Component } from '@angular/core';
import { DialogWindowService } from './dialog-window/service/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = "Dialog Window Title";
  public message = "Dialog Message";


  constructor(
    private readonly _dialogService: DialogWindowService
  ) { }

  public showModalOkWindow():void{
    this._dialogService.showDialogOk(this.title, this.message).subscribe(btn =>{
      console.log(btn);
    });
  }

  public showModalCancelOkWindow():void{
    this._dialogService.showDialogCancelOK(this.title, this.message).subscribe(btn =>{
      console.log(btn);
    });
  }

  public showModalAndCloseWindow():void{
    this._dialogService.showDialogOk(this.title, this.message);

    setTimeout(() =>
      this._dialogService.closeDialog()
    , 2000);
  }
}

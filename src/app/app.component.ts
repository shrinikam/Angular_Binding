import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Mycolor="Orange";
  public Isset=true;
  public myclass="success";

  public Data="New";
  public MyAction()
  {
    this.Data="Submit Button Clicked...";
  }
  public MyActionNew(value:any)
  {
    console.log(value);
  }
}
 

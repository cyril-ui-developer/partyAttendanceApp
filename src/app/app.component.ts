import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  attendees: Array<{}> =[]; 
  
  onAddAttendee(data:{name:string,address:string, signInTime:Date}){
    this.attendees.push({
      name : data.name,
      address : data.address,
      signInTime: new Date()
    })
  }
}

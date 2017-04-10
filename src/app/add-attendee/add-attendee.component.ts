import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrls: ['./add-attendee.component.css']
})
export class AddAttendeeComponent implements OnInit {
  name:string = "";
  address:string = "";
  signInTime:Date;
  @Output() addAttendeeEmitter = new EventEmitter< {name:string, address:string} >();

  constructor() { }
  
   addAttendee(){
    this.addAttendeeEmitter.emit({name:this.name, address:this.address})
    this.name ="";
    this.address = "";
  }

  ngOnInit() {
  }

}

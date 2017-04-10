import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-view-attendees',
  templateUrl: './view-attendees.component.html',
  styleUrls: ['./view-attendees.component.css']
})
export class ViewAttendeesComponent implements OnInit {
@Input() data :{name:string, address:string, signInTime:Date};
@Input() lol :{i:number};
// deleteAttendee(i){

// }
  constructor() { }

  ngOnInit() {
  }

}

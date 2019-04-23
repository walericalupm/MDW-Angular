import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  public initialDate = '';
  public initialHour = 12;
  public hours: number;
  public reservationAmount: number;

  constructor() { }

  ngOnInit() {
  }

}

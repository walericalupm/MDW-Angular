import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { pairwise } from 'rxjs/operators';
import { RoomService } from 'src/app/services/room.service';
import Room from 'src/app/models/room';
import Search from 'src/app/models/search';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  private search: Search;
  public room: Room;
  public form: FormGroup;
  public initialDate: FormControl;
  public initialHour: FormControl;
  public hours: FormControl;

  constructor(private roomService: RoomService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initRoom();
    this.initSearch();
    this.initForm();
  }

  private initRoom() {
    let roomId;
    this.route.paramMap.subscribe(params => roomId = parseInt(params.get('id'), 10));
    this.room = this.roomService.getRooms()[roomId];
  }

  private initSearch() {
    this.search = this.roomService.search;
  }

  private initForm() {
    this.initialDate = new FormControl({value: new Date(this.search.initDate).toLocaleDateString('es-Es'), disabled: true});
    this.initialHour = new FormControl(this.search.initialHour,
      [Validators.min(this.search.initialHour), Validators.max(this.search.initialHour)]);
    this.hours = new FormControl(this.search.hours, [Validators.min(1), Validators.max(this.search.hours)]);

    this.form = new FormGroup({
      initialDate: this.initialDate,
      initialHour: this.initialHour,
      hours: this.hours
    });
    this.manageMaxValues();
  }

  private manageMaxValues() {
    this.initialHour.valueChanges
    .subscribe((val: number) => {
      if (val > this.search.initialHour) {
        this.updateValidity(this.hours, 1, (this.hours.value + this.initialHour.value - val));
      }
    });

    this.form.controls.hours.valueChanges
    .pipe(pairwise())
    .subscribe(([prev, val]: [number, number]) => {
      if (val < this.search.hours) {
        this.updateValidity(this.initialHour, this.search.initialHour, (this.search.initialHour + prev - val));
      }
    });
  }

  private updateValidity(control: FormControl, minValue: number, maxValue: number) {
    control.setValidators([Validators.min(minValue), Validators.max(maxValue)]);
    control.updateValueAndValidity();
  }
}

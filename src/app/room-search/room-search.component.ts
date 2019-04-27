import { Component, OnInit } from '@angular/core';
import Room from './../models/room';

@Component({
  selector: 'app-room-search',
  templateUrl: './room-search.component.html',
  styleUrls: ['./room-search.component.css']
})
export class RoomSearchComponent implements OnInit {
  rooms: Room[] = [
    {
      nombreHotel: 'Ascot',
      fotoHabitacion: 'assets/images/rooms/png/singleRoomHotelAscotCopenhagen.png',
      codigoHabitacion: 'HA124',
      ubicacion: 'Montecarlo',
      tipoHabitacion: 'Single',
      precioHora: 12,
    },
    {
      nombreHotel: 'Carolina',
      fotoHabitacion: 'assets/images/rooms/png/singleRoomHotelCarolinaMontecarlo.png',
      codigoHabitacion: 'HC376',
      ubicacion: 'Montecarlo',
      tipoHabitacion: 'Single',
      precioHora: 10,
    },
    {
      nombreHotel: 'Mediodia',
      fotoHabitacion: 'assets/images/rooms/png/doubleRoomHotelMediodiaMadrid.png',
      codigoHabitacion: 'HM511',
      ubicacion: 'Madrid',
      tipoHabitacion: 'Double',
      precioHora: 19,
    },
    {
      nombreHotel: 'NotreDame',
      fotoHabitacion: 'assets/images/rooms/png/doubleRoomHotelNotreDameParis.png',
      codigoHabitacion: 'HN488',
      ubicacion: 'Paris',
      tipoHabitacion: 'Double',
      precioHora: 44,
    },
    {
      nombreHotel: 'Mondial',
      fotoHabitacion: 'assets/images/rooms/png/tripleRoomHotelMondialParis.png',
      codigoHabitacion: 'HM124',
      ubicacion: 'Paris',
      tipoHabitacion: 'Triple',
      precioHora: 88,
    },
    {
      nombreHotel: 'Opera',
      fotoHabitacion: 'assets/images/rooms/png/suiteRoomHotelOperaParis.png',
      codigoHabitacion: 'HO376',
      ubicacion: 'Paris',
      tipoHabitacion: 'Suite',
      precioHora: 190,
    },
  ];
  constructor() { }

  ngOnInit() {
  }
}

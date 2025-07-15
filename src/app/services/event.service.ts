import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventService {
  getEvents(): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            title: 'TRIBUTO A MARC ANTHONY',
            image: 'assets/marc-anthony.png',
            date: new Date('2025-07-19'),
            soldOut: false,
            location: 'Zipáquirá',
            time: 'Por confirmar'
          },
          {
            title: 'DOOM INDEPENDANCE',
            image: 'assets/doom.png',
            date: new Date('2025-07-19'),
            soldOut: true,
            location: 'Bogotá',
            time: 'Por confirmar'
          },
          {
            title: 'CHAMPETIZA FEST',
            image: 'assets/champetiza.png',
            date: new Date('2025-07-26'),
            soldOut: false,
            location: 'Bogotá',
            time: 'Por confirmar'
          },
          {
            title: 'EL ALDEANO',
            image: 'assets/el-aldeano.png',
            date: new Date('2025-11-14'),
            soldOut: false,
            location: 'Zipáquirá',
            time: 'Por confirmar'
          },
          {
            title: 'TRIBUTO CARIN LEÓN',
            image: 'assets/tributo-carin-leon.png',
            date: new Date('2025-07-26'),
            soldOut: true,
            location: 'Bogotá',
            time: 'Por confirmar'
          },
          {
            title: 'HAMILTON',
            image: 'assets/hamilton.png',
            date: new Date('2025-07-26'),
            soldOut: false,
            location: 'Bogotá',
            time: 'Por confirmar'
          }
        ]);
      }, 2000);
    });
  }
}

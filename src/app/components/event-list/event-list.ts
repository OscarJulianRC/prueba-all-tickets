import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCard } from '../event-card/event-card';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList implements OnInit {
  @Input() searchTerm = '';
  events: any[] = [];
  filtered: any[] = [];
  loading = true;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().then(data => {
      this.events = data;
      this.filtered = data;
      this.loading = false;
    });
  }

  ngOnChanges() {
    this.filtered = this.events.filter(e =>
      e.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

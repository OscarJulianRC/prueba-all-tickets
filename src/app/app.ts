import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Carousel } from './components/carousel/carousel';
import { EventFilters } from './components/event-filters/event-filters';
import { EventList } from './components/event-list/event-list';
import { FormsModule } from '@angular/forms'; // para [(ngModel)]

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    Navbar,
    Carousel,
    EventFilters,
    EventList,
    FormsModule
  ]
})
export class App {
  searchTerm: string = '';

  onSearch(term: string) {
    this.searchTerm = term;
  }
}

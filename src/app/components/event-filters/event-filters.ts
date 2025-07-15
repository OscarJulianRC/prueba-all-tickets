import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-filters.html',
  styleUrl: './event-filters.css'
})
export class EventFilters {
  keyword = '';
  @Output() search = new EventEmitter<string>();

  loading = false;

  onSearch() {
    this.loading = true;

    setTimeout(() => {
      this.search.emit(this.keyword);
      this.loading = false;
    }, 2000)
  }
}

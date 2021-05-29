import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() pageNumber: number = 1;
  @Input() limit: number = 0;
  @Input() max: number = 0;

  @Output() pageNumberChanged = new EventEmitter<{page: number, limit: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  handlePageNumberChange() {
    this.pageNumberChanged.emit({page: this.pageNumber, limit: this.limit});
  }

  getAvailableMax() {
    const last = (this.pageNumber * this.limit);
    return last < this.max ? last : this.max;
  }

  next() {
    if (!((this.pageNumber * this.limit) > this.max)) {
      this.pageNumber += 1;
      this.handlePageNumberChange();
    }
  }

  prev() {
    if (!((this.pageNumber - 1) < 0)) {
      this.pageNumber -= 1;
      this.handlePageNumberChange();
    }
  }

}

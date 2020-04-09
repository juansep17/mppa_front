import { Component, OnInit } from '@angular/core';
import { worker } from '../../../mocks/workers-mock';
import {Worker} from '../../../models/Worker';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {


  work = worker;
  selectedWorker: Worker;

  constructor() { }

  ngOnInit() {
  }

  onSelect(worker: Worker): void {
    this.selectedWorker = worker;
  }
}

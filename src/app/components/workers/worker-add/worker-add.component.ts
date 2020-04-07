import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../../models/Worker';

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {

  @Input() worker: Worker;
  constructor() { }

  ngOnInit() {
  }

}

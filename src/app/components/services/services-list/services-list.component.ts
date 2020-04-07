import { Component, OnInit } from '@angular/core';
import {Service} from '../../../models/Service';
import {RepositoryService} from '../../../services/repository.service';
import {Router} from '@angular/router';
import {Services} from '@angular/core/src/view';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})

export class ServicesListComponent implements OnInit {

  showEdit: boolean;
  showAdd: boolean;
  listService: Service[];
  service: Service;

  constructor(private repo: RepositoryService, private router: Router) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.repo.findAll(`services`)
      .then(response => {
        this.listService = response;
      }, error => {
        console.log('Error al generar la lista');
      });
  }

  openAdd() {
    this.showAdd = true;
    this.showEdit = false;
  }

  openEdit(service: Service) {
    this.showEdit = true;
    this.showAdd = false;
    this.service = service;
  }

}

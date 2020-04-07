import {Component, Input, OnInit} from '@angular/core';
import {Service} from '../../../models/Service';
import {Router} from '@angular/router';
import {RepositoryService} from '../../../services/repository.service';

@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.css']
})
export class ServicesEditComponent implements OnInit {

  @Input() service: Service;

  constructor(private router: Router, private repo: RepositoryService) {
  }

  ngOnInit() {
    this.repo.findById(`services`)
      .then(response => {
        this.service = response;
      }, error => {
        console.log('Error al generar el usuario');
      });
  }
/*
  edit() {
    let id = localStorage.getItem('id');
    this.repo.findById(`services`)
      .then(response => {
        this.service = response;
      }, error => {
        console.log('Error al generar el usuario');
      });
  }*/
}

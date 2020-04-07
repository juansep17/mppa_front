import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import {RepositoryService} from '../../../services/repository.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  listUser: User[];

  constructor(private repo: RepositoryService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.repo.findAll(`users`)
      .then(data => {
        this.listUser = data;
        alert('Funciona correcto');
      }, error => {
        console.log('Error al generar la lista');
      });
  }
}

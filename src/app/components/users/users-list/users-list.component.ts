import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import {RepositoryService} from '../../../services/repository.service';
import {Service} from '../../../models/Service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  showEdit: boolean;
  showAdd: boolean;
  listUser: User[];
  user: User;

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

  openAdd() {
    this.showAdd = true;
    this.showEdit = false;
  }

  openEdit(user: User) {
    this.showEdit = true;
    this.showAdd = false;
    this.user = user;
  }

  delete(user: User) {
    this.repo.deleteService(`users`, user)
      .then(response => {
        // tslint:disable-next-line:no-shadowed-variable
        this.listUser = this.listUser.filter(response => response !== user)
        alert('Se eliminó correctamente');
      }, error => {
        console.log('Ocurrió un error al eliminarlo');
      });
  }
}

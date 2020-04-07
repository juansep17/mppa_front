import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User';
import {RepositoryService} from '../../../services/repository.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  user: User;
  constructor(private repo: RepositoryService, private router: Router) { }

  ngOnInit() {
  }

  add(user: User) {
    this.repo.save(`users`, user)
      .then(response => {
        alert('Se ha registrado el usuario correctamente');
        this.repo.findAll(`services`);
        this.router.navigate(['users']);
      }, error => {
        console.log('Error al generar el usuario');
      });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {RepositoryService} from '../../../services/repository.service';
import {Router} from '@angular/router';
import {Service} from '../../../models/Service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  @Input() user: User;
  constructor(private repo: RepositoryService, private router: Router) { }

  ngOnInit(): void {
  }

  edit(user: User) {
    this.repo.update(`users`, user)
      .then(response => {
        console.log('Se editó correctamente el servicio: ' + user.name);
        alert('Se editó el usuario: ' + user.name);
      }, error => {
        console.log('Error al editar el servicio');
      });
  }
}

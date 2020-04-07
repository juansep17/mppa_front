import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../../models/Service';
import {RepositoryService} from '../../../services/repository.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services-add',
  templateUrl: './services-add.component.html',
  styleUrls: ['./services-add.component.css']
})
export class ServicesAddComponent implements OnInit {

  service: Service = new Service();
  constructor(private repo: RepositoryService, private router: Router) { }

  ngOnInit() {
  }

    add(service: Service) {
    this.repo.save(`services`, service)
      .then(response => {
        alert('Se ha registrado el servicio correctamente');
        this.repo.findAll(`services`);
        this.router.navigate(['services']);
      }, error => {
        console.log('Error al generar el usuario');
      });
  }
}

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

  }

  edit(service: Service) {
    this.repo.update(`services`, service)
      .then(response => {
        console.log('Se editó correctamente el servicio' + service.name);
        alert('Se editó el servicio' + service.name);
      }, error => {
        console.log('Error al editar el servicio');
      });
  }
}

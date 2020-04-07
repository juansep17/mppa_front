import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { RequestService } from './request.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepositoryService {

  constructor(private req: RequestService) { }

  public findAll(root) {
    return this.req.get( root + `/list`);
  }

  public save(root, entity) {
    return this.req.post( root + `/add`, { data: entity });
  }

  public update(entity) {
    return this.req.put(`/edit`, { data: entity });
  }

  public findById(root) {
    return this.req.get(root + `/findById`, { queryParams: { id: 1 } });
  }
}

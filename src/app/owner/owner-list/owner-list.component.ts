import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service'
import { Owner } from './../../_interfaces/owner.model'
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { error } from 'protractor';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  public owners: Owner[];
  public errorMessage: string = '';

  constructor(private repository: RepositoryService, private errorHandle: ErrorHandlerService) { }

  ngOnInit() {
  //  this.getAllOwners();
    this.owners = [
      { id: '0', name: 'Lang', dateOfBirth: new Date('2017-10-27'), address: 'Castro Valley' },
    ];
  }

  public getAllOwners() {
    let apiAddress: string = "api/owner";
    this.repository.getData(apiAddress)
      .subscribe(res => {
        this.owners = res as Owner[];
      },
      (error) =>{
        this.errorHandle.handleError(error);
        this.errorMessage = this.errorHandle.errorMessage;
      })
  }
}
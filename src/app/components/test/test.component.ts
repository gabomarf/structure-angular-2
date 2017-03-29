import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Test }         from '../../models/test';
import { TestService }         from '../../provide/services/test.service';
@Component({
  selector: 'test-view',
 templateUrl: './test.component.html',
  styleUrls: [ './test.component.css' ]
})
export class TestComponent implements OnInit{

constructor(
    private testService: TestService,
    private router: Router) { }

    test: Test = {
      rut : '',
      idcardSerialNumber : ''
  };

    getTest(): void {
        this.testService
            .getTest()
            .then(test => this.test = test);
      }

  ngOnInit(): void {
    this.getTest();
  }

 /* test: Test = {
      rut : '1',
      idcardSerialNumber : 'test'
  };
*/
  title = 'Datos !';
  }

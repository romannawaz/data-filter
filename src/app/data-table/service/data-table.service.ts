import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';

import { Item } from '@app/data-table/common';

@Injectable()
export class DataTableService {
  private readonly entity = 'data';
  // TODO: Move url to env
  private readonly url = 'http://localhost:3000/' + this.entity;

  private readonly _dataSubject = new BehaviorSubject<Item[]>([]);

  get $data(): Observable<Item[]> {
    return this._dataSubject.asObservable();
  }

  constructor(private http: HttpClient) {
    this.loadAllData()
      .pipe(first())
      .subscribe((items) => this._dataSubject.next(items));
  }

  private loadAllData(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }
}

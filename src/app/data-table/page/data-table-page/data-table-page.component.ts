import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Item } from '@app/data-table/common';
import { DataTableService } from '@app/data-table/service';

const material = [MatTableModule, MatPaginatorModule, MatInputModule];

@Component({
  selector: 'app-data-table-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...material],
  providers: [DataTableService],
  templateUrl: './data-table-page.component.html',
  styleUrl: './data-table-page.component.scss',
})
export class DataTablePageComponent implements OnInit, OnDestroy {
  private readonly $destroy = new Subject<boolean>();

  displayedColumns: string[] = ['id', 'name', 'category', 'price'];
  dataSource = new MatTableDataSource<Item, MatPaginator>([]);

  pageSize = 10;

  filter = new FormControl('');

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private dataTableService: DataTableService) {}

  ngOnInit(): void {
    this.dataTableService.$data
      .pipe(takeUntil(this.$destroy))
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });

    this.filter.valueChanges
      .pipe(takeUntil(this.$destroy))
      .subscribe((value) => {
        const filter = value ?? '';
        this.dataSource.filter = filter.trim().toLowerCase();
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
}

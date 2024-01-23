import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

const material = [MatTableModule, MatPaginatorModule];

@Component({
  selector: 'app-data-table-page',
  standalone: true,
  imports: [...material],
  templateUrl: './data-table-page.component.html',
  styleUrl: './data-table-page.component.scss',
})
export class DataTablePageComponent {
  displayedColumns: string[] = ['id', 'name', 'category', 'price'];
  dataSource = [
    {
      id: 1,
      name: 'Terry Mohr III',
      price: '770.00',
      category: 'Licensed Metal Cheese',
    },
    {
      id: 2,
      name: 'Oliver Stracke',
      price: '761.00',
      category: 'Practical Metal Mouse',
    },
    {
      id: 3,
      name: 'Dr. Douglas Buckridge',
      price: '330.00',
      category: 'Small Bronze Pizza',
    },
    {
      id: 4,
      name: 'Ramiro Goyette Jr.',
      price: '185.00',
      category: 'Electronic Rubber Shoes',
    },
    {
      id: 5,
      name: 'Myra Kuphal',
      price: '921.00',
      category: 'Licensed Concrete Soap',
    },
    {
      id: 6,
      name: 'Mathew Jakubowski',
      price: '514.00',
      category: 'Tasty Metal Pants',
    },
    {
      id: 7,
      name: 'Hubert Barrows',
      price: '643.00',
      category: 'Bespoke Frozen Fish',
    },
    {
      id: 8,
      name: 'Erica Wehner-Doyle',
      price: '159.00',
      category: 'Elegant Rubber Bike',
    },
    {
      id: 9,
      name: 'Sophie Waters',
      price: '651.00',
      category: 'Licensed Plastic Tuna',
    },
    {
      id: 10,
      name: 'Andre Kerluke',
      price: '879.00',
      category: 'Licensed Fresh Chicken',
    },
    {
      id: 11,
      name: 'Johnathan McKenzie',
      price: '464.00',
      category: 'Handmade Rubber Cheese',
    },
    {
      id: 12,
      name: 'Sharon Sporer',
      price: '927.00',
      category: 'Sleek Frozen Bacon',
    },
    {
      id: 13,
      name: 'Damon Konopelski',
      price: '334.00',
      category: 'Fantastic Rubber Gloves',
    },
    {
      id: 14,
      name: 'Mr. Jacob Stracke',
      price: '507.00',
      category: 'Handcrafted Granite Chair',
    },
    {
      id: 15,
      name: 'Ashley Feil',
      price: '350.00',
      category: 'Refined Granite Shirt',
    },
    {
      id: 16,
      name: 'Mr. Louis Langosh DVM',
      price: '179.00',
      category: 'Handcrafted Cotton Table',
    },
    {
      id: 17,
      name: 'Dr. Terri Lang',
      price: '278.00',
      category: 'Handmade Wooden Pizza',
    },
    {
      id: 18,
      name: 'Jaime Deckow III',
      price: '587.00',
      category: 'Small Wooden Sausages',
    },
    {
      id: 19,
      name: 'Orville Schamberger',
      price: '270.00',
      category: 'Electronic Fresh Chips',
    },
    {
      id: 20,
      name: 'Patricia Padberg',
      price: '742.00',
      category: 'Ergonomic Wooden Computer',
    },
  ];

  dataLength = this.dataSource.length;
  currentPage = 0;

  handlePageEvent(event: PageEvent): void {
    this.currentPage = event.pageIndex;
  }

  getDataByPage(page = this.currentPage, pageSize = 10) {
    const start = page * pageSize;
    return this.dataSource.slice(start, start + pageSize);
  }
}

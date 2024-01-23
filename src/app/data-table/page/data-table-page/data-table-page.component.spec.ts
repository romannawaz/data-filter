import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';

import { DataTablePageComponent } from './data-table-page.component';

describe('DataTablePageComponent', () => {
  let component: DataTablePageComponent;
  let fixture: ComponentFixture<DataTablePageComponent>;
  let loader: HarnessLoader;
  let instance: DataTablePageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTablePageComponent, NoopAnimationsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    instance = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all paginator harnesses', async () => {
    const paginators = await loader.getAllHarnesses(MatPaginatorHarness);
    expect(paginators.length).toBe(1);
  });

  it('should be able to navigate between pages', async () => {
    const paginator = await loader.getHarness(MatPaginatorHarness);

    expect(instance.paginator.pageIndex).toBe(0);
    await paginator.goToNextPage();
    expect(instance.paginator.pageIndex).toBe(1);
    await paginator.goToPreviousPage();
    expect(instance.paginator.pageIndex).toBe(0);
  });
});

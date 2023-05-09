//table-prototype to generate dynamic columns and rows content
import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table-prototype',
  templateUrl: './table-prototype.component.html',
  styleUrls: ['./table-prototype.component.scss']
})
export class TablePrototypeComponent implements OnInit{
//input elements for the table 
//masterData to feed the row data
//columnSchema to feed the column details
@Input() masterData: any[];
@Input() columnSchema: any[];
//ViewChild elements references for matsort, matpaginator and mat-table 
@ViewChild(MatSort) sort: any= MatSort;
@ViewChild(MatPaginator) paginator:any = MatPaginator;
@ViewChild('dTable')dTable!: MatTable<any>;

  //for loading indicator
  isLoading = true;
  //column list generated from columnSchema to be added in matRowDef
  displayedColumns:any[] | undefined;
  //mat-table's dataSource element
  dataSource = new MatTableDataSource<Object>([]);

constructor() {
  //initialization
  this.masterData = [];
  this.columnSchema = [];
}

ngOnInit(): void {
  // Assign the data to the data source for the table to render
  //with a delay so that table is filled after the data is available
  setTimeout(() =>{
    this.displayedColumns = this.columnSchema.map((col: any)=> col.key);;
    this.dataSource = new MatTableDataSource<Object>(this.masterData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  },2000);
}
//set the datasource's filter with the filter term

applyFilter(e: Event) {
  this.dataSource.filter = (e.target as HTMLInputElement).value.trim().toLowerCase();
}
//since 'cdkDropListDropped' is the event listener to be used for both columns and rows
//implementing only row reordering within mat-table
// reordering of rows using dragDrop will work only when columns are non-sorted
onRowDrop(event: CdkDragDrop<any>) {
  const previousIndex = this.dataSource.data.findIndex(row => row === event.item.data);
    moveItemInArray(this.dataSource.data, previousIndex, event.currentIndex);
    this.dataSource.data = [...this.dataSource.data];
  this.dTable.renderRows();
}
}
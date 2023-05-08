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
isLoading = true;
@Input() masterData: any[];
@Input() columnSchema: any[];
  displayedColumns:any[] | undefined;
  dataSource = new MatTableDataSource<Object>([]);
  @ViewChild(MatSort) sort: any= MatSort;
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  @ViewChild('dTable')dTable!: MatTable<any>;
constructor() {
  this.masterData = [];
  this.columnSchema = [];
}

ngOnInit(): void {
  // Assign the data to the data source for the table to render
  setTimeout(() =>{
    this.displayedColumns = this.columnSchema.map((col: any)=> col.key);;
    this.dataSource = new MatTableDataSource<Object>(this.masterData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isLoading = false;
  },2000);
}
applyFilter(e: Event) {
  this.dataSource.filter = (e.target as HTMLInputElement).value.trim().toLowerCase();
}
onRowDrop(event: CdkDragDrop<any>) {
  const previousIndex = this.dataSource.data.findIndex(row => row === event.item.data);
    moveItemInArray(this.dataSource.data, previousIndex, event.currentIndex);
    this.dataSource.data = [...this.dataSource.data];
  this.dTable.renderRows();
}
}
import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-table-prototype',
  templateUrl: './table-prototype.component.html',
  styleUrls: ['./table-prototype.component.scss']
})
export class TablePrototypeComponent implements OnInit{
faSort = faSort;
isLoading = true;
@Input() masterData: any[];
@Input() columnList: any[];
@Input() columnSchema: any[];
  displayedColumns:any[] | undefined;
  dataSource = new MatTableDataSource<Object>([]);
  @ViewChild(MatSort) sort: any= MatSort;
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
constructor() {
  this.masterData = [];
  this.columnList = [];
  this.columnSchema = [];
}
ngAfterViewInit():void {
  //console.log('inside afterview init  paginator is '+this.paginator + ' and sort is '+ this.sort);
}
ngOnInit(): void {
  // Assign the data to the data source for the table to render
  setTimeout(() =>{
    this.displayedColumns = this.columnList;
    console.log('inside settimeout master data is '+this.masterData);
    this.dataSource = new MatTableDataSource<Object>(this.masterData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(' and paginator inside setTimeout is '+ this.dataSource.paginator);
    console.log(' and sort inside setTimeout is '+ this.dataSource.sort);
    this.isLoading = false;
  },2000);
}
applyFilter(e: Event) {
  this.dataSource.filter = (e.target as HTMLInputElement).value.trim().toLowerCase();
}
}
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {
  allUsers: any = [];
  columnsData: any = [];
  //columnSchema contains column configurations
  columnsSchema : any = [
    {
        key: "user_id",
        type: "number",
        label: "User ID",
        sortable: true,
        editable: true
    },
    {
        key: "full_name",
        type: "text",
        label: "Full Name",
        sortable: true,
        editable: true
    },
    {
        key: "user_name",
        type: "text",
        label: "User Name",
        sortable: true,
        editable: true
    },
    {
      key: "user_email",
      type: "text",
      label: "User Email",
      sortable: true,
      editable: true
    },
    {
      key: "address",
      type: "text",
      label: "User Address",
      sortable: true,
      editable: true
    },
    {
      key: 'isEdit',
      type: 'isEdit',
      label: '',
      sortable: false,
      editable: false
    },
  
  ];
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.fetchUsers();
  
  }
  //calls getUsers() from app Service to fetch users list from API
  fetchUsers(): void {
    this.service
        .getUsers()
        .subscribe((response: any) => {
          this.allUsers = response;
        });
        
        
  }
}
//interface for usersList
export interface UserData {
  user_id: number;
  full_name: string;
  user_name: string;
  user_email: string;
  address: string;
}




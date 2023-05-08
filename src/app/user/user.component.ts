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
  columnsSchema : any = [
    {
        key: "user_id",
        type: "number",
        label: "User ID"
    },
    {
        key: "full_name",
        type: "text",
        label: "Full Name"
    },
    {
        key: "user_name",
        type: "text",
        label: "User Name"
    },
    {
      key: "user_email",
      type: "text",
      label: "User Email"
    },
    {
      key: "address",
      type: "text",
      label: "User Address"
    },
    {
      key: 'isEdit',
      type: 'isEdit',
      label: '',
    },
  
  ];
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.fetchUsers();
  
  }
  fetchUsers(): void {
    this.service
        .getUsers()
        .subscribe((response: any) => {
          this.allUsers = response;
          this.columnsData = this.columnsSchema.map((col: any)=> col.key);
        });
        
        
  }
}
export interface UserData {
  user_id: number;
  full_name: string;
  user_name: URL;
  user_email: string;
  address: string;
}




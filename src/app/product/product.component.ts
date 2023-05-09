import { Component , OnInit} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  allProducts: any = [];
   //columnSchema contains column configurations
  columnsSchema : any = [
    {
        key: "id",
        type: "number",
        label: "Product ID",
        sortable: true,
        editable: true
    },
    {
        key: "title",
        type: "text",
        label: "Product Title",
        sortable: true,
        editable: true
    },
    {
        key: "imageURL",
        type: "imageURL",
        label: "Image",
        sortable: false,
        editable: false
    },
    {
      key: "price",
      type: "number",
      label: "Product Price in $",
      sortable: true,
      editable: true
    },
    {
      key: "rating",
      type: "text",
      label: "User Ratings",
      sortable: false,
      editable: false
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
    this.fetchProducts();
  }
//calls getProducts() from app Service to fetch products list from API
  fetchProducts(): void {
    this.service
        .getProducts()
        .subscribe((response: any) => {
          this.allProducts = parseResponse(response);
        });
        
        
  }
}
//productsList is parsed to form table data
function parseResponse(response: any) : ProductData[] {
    let resultArray = [];
    for(let i=0;i<response.length;i++){
      resultArray.push({
        id: response[i].id,
        title: response[i].title,
        imageURL: response[i].image,
        price: response[i].price,
        rating: response[i].rating.rate + ' from ' +response[i].rating.count + ' users' 

      })
    }
    return resultArray;
  }
//interface for productList
  export interface ProductData {
    id: number;
    title: string;
    imageURL: URL;
    price: string;
    rating: string;
  }



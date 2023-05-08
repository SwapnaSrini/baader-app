import { Component , OnInit} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  allProducts: any = [];
  columnsSchema : any = [
    {
        key: "id",
        type: "number",
        label: "Product ID"
    },
    {
        key: "title",
        type: "text",
        label: "Product Title"
    },
    {
        key: "imageURL",
        type: "imageURL",
        label: "Image"
    },
    {
      key: "price",
      type: "number",
      label: "Product Price in $"
    },
    {
      key: "rating",
      type: "text",
      label: "User Ratings"
    },
    {
      key: 'isEdit',
      type: 'isEdit',
      label: '',
    },
  
  ];
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.service
        .getProducts()
        .subscribe((response: any) => {
          this.allProducts = parseResponse(response);
        });
        
        
  }
}
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

  export interface ProductData {
    id: number;
    title: string;
    imageURL: URL;
    price: string;
    rating: string;
  }



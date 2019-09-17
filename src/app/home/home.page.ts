import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  baseUrl: string = '';
  restItems:any= [];

  constructor(private apiService :ApiService,private router:Router) 
  {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/users';
    this.getRestItems();
  }

  navigate()
  {
    this.router.navigate(['/page1']);
  }
  getRestItems(): void {
    this.apiService.getData(this.baseUrl)
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log('users',this.restItems);
        }
      )
  }

}

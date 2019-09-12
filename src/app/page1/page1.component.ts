import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  checkAll: boolean;
  enteredReason:any='';
  enteredAmount:any='';
  expenseList = [];
  totalExpenses = 0;
  constructor(private emailComposer: EmailComposer) { 

    
  }

  ngOnInit() 
  {

  }
  addExpense()
  {
    if(this.enteredAmount <=0 || this.enteredAmount.length<=0 || this.enteredReason.length<=0)
    {
      return;
    }
    console.log(this.enteredAmount,this.enteredReason);
    this.expenseList.push({'amount':this.enteredAmount,'reason':this.enteredReason});
    console.log(this.expenseList);
    this.totalExpenses +=  this.enteredAmount;
  }

  clearData()
  {
    this.enteredAmount = '';
    this.enteredReason = '';
  }

  }

  



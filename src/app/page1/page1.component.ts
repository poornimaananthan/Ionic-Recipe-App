import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {

  @ViewChild('signupSlider') signupSlider;

  public slideOneForm: FormGroup;
	public slideTwoForm: FormGroup;


  checkAll: boolean;
  enteredReason:any ='';
  enteredAmount:any ='';
  expenseList = [];
  totalExpenses = 0;
  isSubmitted:boolean;
  myGroup: FormGroup;
  constructor(public formbuilder : FormBuilder) {

    this.myGroup = this.formbuilder.group({
        enteredReason: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
        enteredAmount: ['',Validators.compose([Validators.required,Validators.minLength(6)])]
    });

    this.slideOneForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      age: ['']
  });
    this.slideTwoForm = this.formbuilder.group({
      username: [''],
      privacy: [''],
      bio: ['']
  });
  }

  ngOnInit() 
  {

  }
  addExpense()
  {
    this.isSubmitted = true;
    console.log(this.myGroup);
    if(this.myGroup.value.enteredAmount <=0 || this.myGroup.value.enteredAmount.length<=0 || this.myGroup.value.enteredReason.length<=0)
    {
      return;
    }
    console.log(this.enteredAmount,this.enteredReason);
    this.expenseList.push({'amount':this.myGroup.value.enteredAmount,'reason':this.myGroup.value.enteredReason});
    this.totalExpenses +=  this.myGroup.value.enteredAmount ;
  }

  clearData()
  {
    console.log(this.myGroup.value.enteredAmount);
    this.myGroup.reset();
  }

  next(){
    this.signupSlider.slideNext();
  }

  prev(){
      this.signupSlider.slidePrev();
  }

  save(){

  }

  }

  



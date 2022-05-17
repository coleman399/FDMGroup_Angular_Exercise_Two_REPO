import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  private categoryOne: string = "Home";
  private categoryTwo: string = "Electronics";
  private categoryThree: string = "Fashion";

  constructor() { }

  getCategoryOne(): string { return this.categoryOne; }

  setCategoryOne(value: string) { this.categoryOne = value; }

  getCategoryTwo(): string { return this.categoryTwo; }

  setCategoryTwo(value: string) { this.categoryTwo = value; }

  getCategoryThree(): string { return this.categoryThree; }

  setCategoryThree(value: string) { this.categoryThree = value; }

  ngOnInit(): void {
  }

}

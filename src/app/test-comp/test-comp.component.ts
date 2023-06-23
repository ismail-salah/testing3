import { Component } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent {
number:number = 0 ;

up(){
  this.number = this.number + 1
}

down(){
  this.number = this.number - 1
}


}

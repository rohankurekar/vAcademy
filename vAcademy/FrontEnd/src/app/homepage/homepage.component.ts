import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunctionbtnNews() {
    var modal = document.getElementById("myModalNews");
    modal.style.display = "block";
  }
  myFunctionSpanNews() {
    var modal = document.getElementById("myModalNews");
    modal.style.display = "none";
  }
  myFunctionWindowNews(){
    var modal = document.getElementById("myModalNews");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  myFunctionbtnContact() {
    var modal = document.getElementById("myModalContact");
    modal.style.display = "block";
  }
  myFunctionSpanContact() {
    var modal = document.getElementById("myModalContact");
    modal.style.display = "none";
  }
  myFunctionWindowContact() {
    var modal = document.getElementById("myModalContact");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  myFunctionbtnAboutUs() {
    var modal = document.getElementById("myModalAboutUs");
    modal.style.display = "block";
  }
  myFunctionSpanAboutUs() {
    var modal = document.getElementById("myModalAboutUs");
    modal.style.display = "none";
  }
  myFunctionWindowAboutUs() {
    var modal = document.getElementById("myModalAboutUs");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  myFunctionbtnFAQ() {
    var modal = document.getElementById("myModalFAQ");
    modal.style.display = "block";
  }
  myFunctionSpanFAQ() {
    var modal = document.getElementById("myModalFAQ");
    modal.style.display = "none";
  }
  myFunctionWindowFAQ() {
    var modal = document.getElementById("myModalFAQ");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

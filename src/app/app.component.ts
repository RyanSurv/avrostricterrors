import { Component, OnInit } from "@angular/core";
import * as clover from "remote-pay-cloud";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(clover);
  }
}

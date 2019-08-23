import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit {
  // arg is what you can name the exposed prop outside the component
  @Input("srvElement") element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() {}
}

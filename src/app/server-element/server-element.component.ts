import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // arg is what you can name the exposed prop outside the component
  // you access it in the parent as [srvElement] and then assign it a value in the parent
  @Input("srvElement") element: { type: string; name: string; content: string };
  // get local ref of an element in the content passed into this component:
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {}

  // every time @Input prop changes
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges run", changes);
  }

  ngOnInit() {
    console.log("ngoninit called");
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("after content init called");
  }

  ngAfterContentChecked() {
    console.log("after content checked called");
  }

  ngAfterViewInit() {
    console.log("after view init called");
  }

  ngAfterViewChecked() {
    console.log("after view checked called");
  }

  ngOnDestroy() {
    console.log("on Destroy called");
  }
}

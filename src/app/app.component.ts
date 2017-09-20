import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('qrScanner') qrScanner:any;

  title = 'app';

  ngOnInit(){
      debugger
  }

  decodedOutput(e){
debugger
      console.log(e);
  }
}

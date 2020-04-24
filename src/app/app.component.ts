import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'document-viewer';
  doc_url:string;
  file:any;

  ngOnInit(): void {
    // this.doc_url = "https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx";
    this.doc_url = "http://www.africau.edu/images/default/sample.pdf";
  }

 
  
}

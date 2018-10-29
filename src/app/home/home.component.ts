import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../document.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private documentService: DocumentService) {
  }

  ngOnInit() {
    this.documentService.getPrivacyPolicyDocument().subscribe(res => {
      console.log(JSON.parse(res['body'].toString()));
    });
  }

}

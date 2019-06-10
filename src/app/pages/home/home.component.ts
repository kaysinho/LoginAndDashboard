import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
declare var M:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private session:SessionService) { 
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  }

  ngOnInit() {
    
  }

}

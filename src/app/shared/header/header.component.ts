import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/architecture/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(
    private injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {

  }

}

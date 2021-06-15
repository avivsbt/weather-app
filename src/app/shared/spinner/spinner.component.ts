import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/architecture/base.component';
import { selectSpinner } from 'src/app/store/selectors/settings.selectors';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent extends BaseComponent implements OnInit, OnDestroy {

  spinner$: Observable<boolean>;
  
  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.spinner$ = this.select(selectSpinner);
  }

}

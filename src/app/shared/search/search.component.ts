import { Component, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input, Injector } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from 'rxjs/operators';
import { SearchApiService } from 'src/app/services/search-api.service';
import { BaseComponent } from 'src/app/architecture/base.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  @Output() onSelectionChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() searchEndPoint: string;

  public resultSearch: any;
  public onSearch: boolean;

  constructor(
    private injector: Injector,
    private searchApiService: SearchApiService
  ) {
    super(injector);
    this.onSearch = true;
  }

  ngAfterViewInit(): void {
    this.search();
  }

  private search(): void {
    let regex = new RegExp(/^[a-zA-Z\s]*$/);
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        if (event.target.value.length <= 2) {
          this.onSearch = true;
          this.resultSearch = null;
        }
        return event.target.value;
      })
      , filter(res => res.length > 2 && regex.test(res))
      , debounceTime(1000)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.searchApiService.search(this.searchEndPoint + text).subscribe(result => {
        this.resultSearch = result
        this.onSearch = false;
      })
    });
  }

  public clearSearch(): void {
    this.onSearch = true;
    this.resultSearch = null;
    this.searchInput.nativeElement.value = '';
  }

  public selectSearch(data: any): void {
    this.onSelectionChanged.emit(data);
    this.clearSearch();
  }

}

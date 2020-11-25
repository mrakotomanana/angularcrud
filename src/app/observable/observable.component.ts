import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { interval, merge, Observable, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  status = '';
  employees: Array<number> = [];
  subscription: Subscription;

  test = '';
  tab = [];

  constructor() { }

  ngOnInit(): void {
    // const observable: Observable<number> = interval(1000).pipe(take(10), map(elt => elt + 3));
    const subject = new Subject<number>();

    subject.subscribe({
      next: (value) => {
        console.log(`Test A ${value}`);
      }
    });

    subject.subscribe({
      next: (value) => {
        console.log(`Test B ${value}`);
      }
    });


    // this.subscription = observable.subscribe(
    //   (value) => {
    //     this.employees.push(value);
    //   },
    //   (error) => {
    //     this.status = error;
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // );

    // const observable1: Observable<number> = of(1, 5, 2, 3);
    // const observable2: Observable<number> = of(4, 5, 6);
    // const merged = merge(
    //   observable1,
    //   observable2
    // );

    // merged.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.test = error;
    //   },
    //   () => {
    //     this.test = 'fini';
    //   }
    // );

    subject.next(1);
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}

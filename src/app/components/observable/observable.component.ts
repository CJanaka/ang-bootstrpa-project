import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  orderStatus!: any;
  orderstatusObs!: Observable<any>;
  myObservable: Observable<any> = new Observable((observer) => {
    observer.next('a')
    observer.next('b')
    observer.next('c')
    observer.next('d')
    observer.next('e')
    observer.next('1')
    observer.next('2')
    observer.next('3')
  });

  myObservable2: Observable<any> = new Observable((observer) => {
    setTimeout(() => { observer.next('1') }, 1000);
    setTimeout(() => { observer.next('2') }, 2000);
    //setTimeout(() => {observer.error('Errors')}, 3500);
    //setTimeout(() => {observer.complete()}, 4000);
    setTimeout(() => { observer.next('5') }, 5000);
  }).pipe(filter((data: any) => {
    return data > 2
  }),
    map((data: any) => {
      return data * 2
    })
  );

  constructor() { }



  ngOnInit(): void {
    // this.myObservable.subscribe(
    //   val=>{
    //     console.log(val)
    //   },
    //   error =>{
    //     console.log("error occured")
    //   },
    //   () =>{
    //     console.log("completed")
    //   },
    // )

    //these two function execute same time
    this.myObservable2.subscribe(
      val => {
        console.log(val)
      },
      error => {
        console.log("error occured")
      },
    )

    this.myObservable2.subscribe(
      val => {
        console.log(val)
      },
      error => {
        console.log("error occured")
      },
    )
    this.initOrederstatus();
  }

  initOrederstatus(){
    this.orderstatusObs = new Observable((observer) => {
      setTimeout(() => { observer.next('inprogress..') }, 2000);
      setTimeout(() => { observer.next('processesing..') }, 3000);
      setTimeout(() => { observer.next('copmleted..') }, 4000);
    });

    this.orderstatusObs.subscribe(
      value => {
        this.orderStatus = value;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}

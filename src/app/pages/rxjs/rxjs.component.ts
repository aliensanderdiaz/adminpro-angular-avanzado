import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
  filter,
  interval,
  map,
  retry,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs!: Subscription;
  constructor() {
    // const obs$ = this.retornaObservable();

    // obs$.pipe(retry(1)).subscribe({
    //   next: (data) => console.log({ data }),
    //   error: (error) => console.error({ error }),
    //   complete: () => console.info('Observer Terminado'),
    // });

    // this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
      this.intervalSubs.unsubscribe()
  }

  retornaObservable(): Observable<number> {
    let index = 1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        observer.next(index);
        index++;

        if (index === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (index === 2) {
          clearInterval(intervalo);
          observer.error('ERROR');
        }
      }, 300);
    });
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      // take(10),
      map((valor) => valor + 1),
      filter((valor) => valor % 2 === 0)
    );
  }
}

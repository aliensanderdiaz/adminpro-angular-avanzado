import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo: string = '';
  public tituloSubs$!: Subscription

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {

      // console.log(this.route)
      // this.titulo = this.route.snapshot.children[0].data['titulo']
    this.tituloSubs$ = this.getArgumentosRuta().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = 'AdminPro - ' +  titulo
    });
  }

  ngOnDestroy(): void {
      this.tituloSubs$.unsubscribe()
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter((event) => event instanceof ActivationEnd),
        filter(
          (event) => (event as ActivationEnd).snapshot.firstChild === null
        ),
        map((event) => (event as ActivationEnd).snapshot.data)
      )

  }
}

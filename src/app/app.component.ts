import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { HttpCancelService } from '@services/http-cancel.service';
import { filter } from 'rxjs';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
})
export class AppComponent implements OnInit
{
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private httpCancelService: HttpCancelService
    ) {
        this.route.queryParams.subscribe(params => {
            const { redirect_from } = params;

            if (redirect_from === 'module') {
                sessionStorage.clear();
                this.router.navigate(['/']);
            }      
          });

        this.router.events
            .pipe(
                filter(event => event instanceof NavigationStart)
            )
            .subscribe(() => this.httpCancelService.cancelPendingRequests());
    }

    ngOnInit(): void {}
}

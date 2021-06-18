import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService,router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
   this.authService.
    return undefined;
  }
}

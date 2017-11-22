import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/**
 * A maioria dos Apps tem o conceito de usuário. Este provider tem a
 * função de realizar os métodos de login/signup/etc.
 *
 *
 * Esse provider irá fazer chamadas para a API no quesito 'login' e 'signup'
 * Por padrão, espera-se que 'login' e 'signup' retorne um objeto JSON no formato:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // Campos do usuário que o app irá precisar, como "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * Se o campo 'status' não é 'success', o erro é detectado e retornado.
 */
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}

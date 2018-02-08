import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import 'Rxjs/Rx';

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() { }

  createObservableSocket(url: string, id: number): Observable<string> {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = ev => observer.next(ev.data);
        this.ws.onerror = ev => observer.error(ev);
        this.ws.onclose = ev => observer.complete();
        this.ws.onopen = ev => this.sendMessage({productId: id});
        return () => this.ws.close();
      }
    );
  }

  sendMessage(message: any) {
    console.log(message);
    this.ws.send(JSON.stringify(message));
  }
}

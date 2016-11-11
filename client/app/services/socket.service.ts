import { Injectable }    from '@angular/core';
import { Observable } from 'rxjs/Observable'

import * as io from 'socket.io-client'
import Socket = SocketIOClient.Socket;

@Injectable()
export class SocketService {
  private port: number = 3011;
  private socket:Socket  = io('http://localhost:' + this.port)

  constructor() {

    console.log('socket.service initiated for port ' + this.port)
  }
  
  getId(){
    return this.socket.id
  }

  sendMessage(event, message){
    this.socket.emit(event, message)  
  }
  
  getMessages(event) {

    //console.log('getMessages')
    let observable = new Observable(observer => {
      //console.log('observer')
      this.socket.on(event, (data) => {
        //console.log('data')
        observer.next(data)
      })
      return () => {
        //console.log('this.socket.disconnect()')
        this.socket.disconnect()
      }
    })     
    //console.log('return')
    return observable;
  } 
}
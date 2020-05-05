import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  title = 'my-first-app';
  servername: string = '';
  serverCreated = false;
  serverStatus = 'No server created';
  servers = ['test1','test2'];

 onCreateServer(){   
   this.serverCreated = true;
   this.servers.push(this.servername);
   this.serverStatus = 'Server was created. server name is ' + this.servername;
  }
  reset(){
  this.servername = '';
  }

  constructor() { }

  ngOnInit(): void {
  }
 
}

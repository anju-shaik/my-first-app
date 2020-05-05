import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servername: string ='Test';
  serverStatus: string = 'offline';
  servercreationStatus: string='';
  id: number = 100;
  serverCreated = false;
  servers = ['Testserver', 'test2'];
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.servername);
    this.servercreationStatus = 'New server created. Name is' + this.servername;
  }
  constructor(){
    this.serverStatus= Math.random() > 0.5 ? 'offline': 'online';
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}

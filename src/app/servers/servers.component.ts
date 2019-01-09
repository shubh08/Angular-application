import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer : boolean = false; 
  serverStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  constructor() {
setTimeout(() => {this.allowAddServer=true;},2000);

   }
onClickButton(){
  this.serverCreated = true;
  this.serverStatus='Server was created. Name is :'+ this.serverName;
}

onUpdateServerName(event: Event){
this.serverName=(<HTMLInputElement>event.target).value;

}
  ngOnInit() {
  }

}

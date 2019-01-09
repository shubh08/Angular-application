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
  constructor() {
setTimeout(() => {this.allowAddServer=true;},2000);

   }
onClickButton(){
  this.serverStatus='Server was created';
}

onUpdateServerName(event: Event){
this.serverName=(<HTMLInputElement>event.target).value;

}
  ngOnInit() {
  }

}

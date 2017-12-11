import { Component, OnInit } from '@angular/core';
import { ServerService } from 'app/servers.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appName = '';
  constructor(private serversService: ServerService){

  }

  ngOnInit(){
    this.appName = this.serversService.onGetAppName();
  }

  
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave(){
    this.serversService.onAddServers(this.servers).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
  )
}

onGet() {
  this.serversService.onGetServers().subscribe(
    (servers: any[])=>this.servers = servers,
    (error)=> console.log(error)
  );
  
}

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

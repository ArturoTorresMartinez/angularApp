import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = "TestServer";
  serverCreated = false;
  servers = ["Testserver"];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      "Server was created, name is " + this.serverName;
  }
  onUpdateServerName(event: any) {
    // console.log(event); Whole Event
    // console.log(event.data); Event that triggered method
    // console.log(event.target.value); Full value of the input
    this.serverName = event.target.value;
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "";
  personName: string = "";
  showSecret = false;
  log = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus() {
    return this.serverStatus;
  }
  onReset() {
    this.personName = "";
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
  onToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}

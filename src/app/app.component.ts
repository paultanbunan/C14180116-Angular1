import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hasil;
  giliran = true;
  board: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  x;
  y;
  click() {
    if (this.giliran) {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 1;
        this.giliran = false;
        this.hasil = this.board;
        console.log(this.hasil);
      } else {
        alert(this.hasil);
      }
    } else {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 2;
        this.giliran = true;
        this.hasil = this.board;
        console.log(this.hasil);
      } else {
        alert(this.hasil);
      }
    }
  }
}

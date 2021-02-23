import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hasil;
  turn = 1;
  board: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  x;
  y;
  click() {
    if (this.turn == 1) {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 1;
        this.turn = 2;
        this.hasil = this.board;
        console.log(this.hasil);
      } else {
        alert("Sudah Diinput Player 2");
      }
    } else {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 2;
        this.turn = 1;
        this.hasil = this.board;
        console.log(this.hasil);
      } else {
        alert("Sudah Diinput Player 1");
      }
    }
  }
}

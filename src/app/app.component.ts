import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
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
  a = "player 1 menang!";
  b = "player 2 menang!";
  click() {
    if (this.turn == 1) {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 1;
        this.turn = 2;
      } else {
        alert("Sudah Diinput");
      }
    } else {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 2;
        this.turn = 1;
      } else {
        alert("Sudah Diinput");
      }
    }
  }
}

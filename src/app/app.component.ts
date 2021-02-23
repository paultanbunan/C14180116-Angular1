import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  turn = 1;
  awal: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
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
        for (var i = 0; i < 5; i++) {
          //colom
          console.log(i);
          if (this.board[this.x - 1][i] != 1) {
            break;
          }
          if (i == 4) {
            alert("Player 1 menang");
            this.board = this.awal;
          }
        }
        for (var i = 0; i < 5; i++) {
          //row
          console.log(i);
          if (this.board[i][this.y - 1] != 1) {
            break;
          }
          if (i == 4) {
            alert("Player 1 menang");
            this.board = this.awal;
          }
        }
        this.turn = 2;
      } else {
        alert("Sudah Diinput");
      }
    } else {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 2;
        for (var i = 0; i < 5; i++) {
          //colom
          console.log(i);
          if (this.board[this.x - 1][i] != 2) {
            break;
          }
          if (i == 4) {
            alert("Player 2 menang");
            this.board = this.awal;
          }
        }
        for (var i = 0; i < 5; i++) {
          //row
          console.log(i);
          if (this.board[i][this.y - 1] != 2) {
            break;
          }
          if (i == 4) {
            alert("Player 2 menang");
            this.board = this.awal;
          }
        }
        this.turn = 1;
      } else {
        alert("Sudah Diinput");
      }
    }
  }
}

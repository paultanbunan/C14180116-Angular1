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
  player1 = 0;
  player2 = 0;
  click() {
    if (this.turn == 1) {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 1;
        for (var i = 0; i < 5; i++) {
          for (var j = 0; j < 4; j++) {
            if (this.board[j][i] == 1 && this.board[j + 1][i] == 1) {
              this.player1++;
            }
            if (this.board[j][i] == 2 && this.board[j + 1][i] == 2) {
              this.player2++;
            }
          }
        }
        this.turn = 2;
        console.log(this.player1);
        if (this.player1 == 5) {
          alert("Player 1 Menang");
        }
        if (this.player2 == 5) {
          alert("Player 2 Menang");
        }
      } else {
        alert("Sudah Diinput");
      }
    } else {
      if (this.board[this.x - 1][this.y - 1] == 0) {
        this.board[this.x - 1][this.y - 1] = 2;
        for (var i = 0; i < 5; i++) {
          for (var j = 0; j < 4; j++) {
            if (this.board[j][i] == 1 && this.board[j + 1][i] == 1) {
              this.player1++;
            }
            if (this.board[j][i] == 2 && this.board[j + 1][i] == 2) {
              this.player2++;
            }
          }
        }
        this.turn = 1;
        console.log(this.player1);
        if (this.player1 == 5) {
          alert("Player 1 Menang");
        }
        if (this.player2 == 5) {
          alert("Player 2 Menang");
        }
      } else {
        alert("Sudah Diinput");
      }
    }
  }
}

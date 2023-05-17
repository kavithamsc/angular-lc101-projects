import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height: number = 0;
  horizontal: number = 0;
  message = 'Space shuttle ready for takeoff!';
  takenOff: boolean = false;
  

  handleTakeOff() {
    let result = window.confirm("Are you sure the shuttle is ready for take off?");
    if(result) {
      this.color = 'blue';
      this.message = "Shuttle in flight.";
      this.horizontal = 0;
      this.height = 10000;
     
    }
  }

  handleLand(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.color = 'red';
    this.message = "The shuttle has landed.";
    this.height = 0;
     rocketImage.style.bottom='0px';
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if (result) {
      this.color = 'yellow';
      this.message = "Mission aborted.";
      this.height = 0;
      rocketImage.style.bottom='0px';
    }
  }

  moveRocket(rocketImage, direction:string) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.horizontal = this.horizontal + 10000;
   }
   if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.horizontal = this.horizontal - 10000;
   }
   if (direction === 'up') {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
   }
   if (direction === 'down') {
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height - 10000;
   }
  }
}
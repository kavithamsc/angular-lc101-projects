import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }
   addMovie (newTitle: string) {
      let errorMessage: string ="";

      if(this.movies.includes(newTitle)){
         errorMessage = "this moive is already on the list";
      }else if (newTitle === ""){
         errorMessage= "please enter a movie name";
      }else{
      this.movies.push(newTitle);
   }
   return errorMessage;
}
}
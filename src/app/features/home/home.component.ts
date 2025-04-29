import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../core/services/recipe.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  recipes: any[]=[];

  constructor(private RecipeService: RecipeService) { }
  ngOnInit(): void {
     
    this.RecipeService.getAllRecipes().subscribe((data: any[]) => {
      this.recipes= data;

      console.log(this.recipes);
    });
}
}
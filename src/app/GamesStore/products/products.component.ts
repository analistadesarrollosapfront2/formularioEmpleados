import { Component, OnInit } from '@angular/core';
import { GamesStoreService } from '../games-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  games: any[] = [];
  filteredGames: any[] = [];
  categories: any[] = [
    { id: 1, name: 'Accion' },
    { id: 2, name: 'Fantasia' },
    { id: 3, name: 'Terror' }
  ];
  selectedCategory: number | undefined = undefined; 
  searchQuery: string = '';

  constructor(private gamesStoreService: GamesStoreService) { }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gamesStoreService.getGames(this.searchQuery, this.selectedCategory?.toString()).subscribe(
      (data) => {
        this.games = data;
        this.applyFilters(); 
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  applyFilters(): void {
    // Aplicar filtro de búsqueda y categoría
    this.filteredGames = this.games.filter(game =>
      (this.searchQuery === '' || game.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
      (this.selectedCategory === undefined || game.categoriaId === this.selectedCategory)
    );
  }

  onSearchChange(event: any): void {
    this.searchQuery = event.target.value;
    this.applyFilters(); 
  }

  filterByCategory(categoryId: number): void {
    this.selectedCategory = categoryId;
    this.loadGames(); 
  }

  clearCategoryFilter(): void {
    this.selectedCategory = undefined;
    this.loadGames(); 
  }
}

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
  categories: string[] = ['Terror', 'Accion', 'Fantasia'];
  selectedCategory: string | undefined = undefined;
  searchQuery: string = '';

  constructor(private gamesStoreService: GamesStoreService) { }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gamesStoreService.getGames(this.searchQuery, this.selectedCategory).subscribe(
      (data) => {
        this.games = data;
        this.applyFilters(); // Aplicar filtros después de cargar juegos
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  applyFilters(): void {
    // Aplicar filtro de búsqueda
    this.filteredGames = this.games.filter(game =>
      game.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSearchChange(event: any): void {
    this.searchQuery = event.target.value;
    this.applyFilters(); // Aplicar filtros al cambiar el término de búsqueda
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.loadGames(); // Recargar juegos con la nueva categoría seleccionada
  }

  clearCategoryFilter(): void {
    this.selectedCategory = undefined;
    this.loadGames(); // Limpiar filtro de categoría y recargar juegos
  }
}

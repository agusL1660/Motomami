import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from '../../core/services/api/auth.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavbarService } from './navbar.service';
import { EstiloInterface } from '../../interfaces/EstiloInterface';
import { CarritoLogicaService } from '../../core/services/carrito-logica.service';
import { MotoInterface } from '../../interfaces/MotoInterface';
import { LoginInterface } from '../../interfaces/LoginInterface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  private authSubscription!: Subscription;
  estilos: EstiloInterface[]=[];
  public itemsCount=0;
  items: Map<MotoInterface, number>=new Map;

  constructor(private authService: AuthService,private router: Router,private navbar: NavbarService,private cartService: CarritoLogicaService) {}

  ngOnInit() {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(status => {
      this.isAuthenticated = status;
    });
    this.navbar.getEstilos().subscribe(estilos => this.estilos = estilos);
    this.navbar.getCardNumber().subscribe(count => {
      this.itemsCount = count;
    });
    this.navbar.getItems().subscribe(items => {
      this.items = items;
    });
    
  }

  login() {
    this.router.navigate(['/login']);
  }
  dashboard() {
    this.router.navigate(['/']);
    }
  register() {
    this.router.navigate(['/register']);
  }
  motos() {
    this.router.navigate(['/motos']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  carrito() {
    this.router.navigate(['/carrito']);
  }
  pedidos() {
    this.router.navigate(['/pedidos']);
  }

  eliminarItem(item: MotoInterface) {
    this.cartService.removeItem();
    this.cartService.removeItemToCart(item);
  }  

  trackById(index: number, item: any) {
    return item.id;
  }
  ngOnDestroy() {
    // Evitar fugas de memoria
    this.authSubscription.unsubscribe();
  }
}

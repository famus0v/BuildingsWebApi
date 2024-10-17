import { Routes } from '@angular/router';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { RoomsComponent } from './components/rooms/rooms.component';

export const routes: Routes = [
    { path: 'buildings', component: BuildingsComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: '', redirectTo: '/buildings', pathMatch: 'full' }
];
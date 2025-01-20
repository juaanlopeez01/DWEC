import { Routes } from '@angular/router';
import { SeriesComponent } from './pages/series/series.component';

export const routes: Routes = [
    {path:"", pathMatch: "full", redirectTo: "services"},
    {path:"series", component: SeriesComponent  }
];

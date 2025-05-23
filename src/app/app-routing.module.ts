import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',  
    pathMatch: 'full',
  },
  
  {
    path: 'auth',
    loadChildren: () => import('./seguridad/auth/auth.module').then(m => m.AuthPageModule),
  },
  {
    path: 'inicio',
    loadChildren: () => import('./seguridad/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./seguridad/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'detalle-publicacion',
    loadChildren: () => import('./trabajos/detalle-publicacion/detalle-publicacion.module').then( m => m.DetallePublicacionPageModule)
  },
  {
    path: 'chat-preview',
    loadChildren: () => import('./contacto/chat-preview/chat-preview.module').then( m => m.ChatPreviewPageModule)
  },
  {
    path: 'chat-open',
    loadChildren: () => import('./contacto/chat-open/chat-open.module').then( m => m.ChatOpenPageModule)
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./seguridad/miperfil/miperfil.module').then( m => m.MiperfilPageModule)
  },  {
    path: 'informacion',
    loadChildren: () => import('./seguridad/informacion/informacion.module').then( m => m.InformacionPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
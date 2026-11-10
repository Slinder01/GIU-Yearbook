import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'students/:id',
    renderMode: RenderMode.Server
  },
  { path: 'login', renderMode: RenderMode.Client }, // <- add
 { path: 'profile', renderMode: RenderMode.Client }, // <- add

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

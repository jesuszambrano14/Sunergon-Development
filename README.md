
  # Sunergon Development

  This is a code bundle for Sunergon Development. The original project is available at https://www.figma.com/design/9e4mANYGWj7zaWSenHQxKh/Sunergon-Development.

  ## Running the code

  Run `npm install` to install the dependencies.

  Run `npm run dev` to start the development server.

## Requirements

- Node.js 18+ recomendado (20+ ideal)
- npm 9+

## Scripts disponibles

- `npm install`: instala dependencias
- `npm run dev`: inicia el servidor de desarrollo (Vite)
- `npm run build`: genera el build de producción en `dist/`
- `npm run preview`: sirve localmente el build generado

## Cómo trabajar en el proyecto

1) Clonar el repo

```bash
git clone https://github.com/jesuszambrano14/Sunergon-Development.git
cd Sunergon-Development
npm install
npm run dev
```

2) Crear ramas por feature

```bash
git checkout -b feature/nombre-corto
# ... cambios ...
git add -A && git commit -m "feat: breve descripción"
git push -u origin feature/nombre-corto
```

3) Abrir Pull Request hacia `main` desde GitHub

## Build de producción

```bash
npm run build
# salida en dist/
```

## Estructura (resumen)

- `src/components`: componentes reutilizables de UI y secciones
- `src/pages`: páginas de routing
- `src/styles`: estilos globales y tokens
- `src/contexts`: contextos de React (estado global)
- `vite.config.ts`: configuración de Vite

## Variables de entorno

Actualmente no son requeridas para desarrollo local. Si se agregan servicios externos, definir `.env` y documentar las claves.

## Colaboración

- Solicitar acceso como Collaborator a `Settings > Collaborators` del repo
- Seguir el flujo de ramas y PRs descrito arriba


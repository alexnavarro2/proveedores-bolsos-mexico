# BOLSO MX — Directorio de proveedores mexicanos de bolsos

Portal B2B construido con Next.js, React, TypeScript, Tailwind CSS y Lucide. La primera versión usa `data/providers.json` como base de datos y está lista para migrar posteriormente a Supabase.

## Funciones
- Búsqueda por texto.
- Filtros por estado, nivel y private label.
- Tarjetas de proveedores con score y nivel de confianza.
- Página individual por proveedor.
- Comparador de hasta 4 proveedores.
- Fuentes públicas por registro.
- Sitemap y robots.

## Desarrollo local
```bash
npm install
npm run dev
```
Abre `http://localhost:3000`.

## Agregar proveedores
Edita `data/providers.json`. Mantén un `slug` único y conserva los campos existentes. No inventes capacidades: usa `No confirmado` cuando no haya evidencia.

## Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit - Directorio proveedores bolsos México"
git branch -M main
git remote add origin URL_REPOSITORIO
git push -u origin main
```

## Deploy en Vercel
1. Entra a Vercel y elige **Add New → Project**.
2. Importa el repositorio de GitHub.
3. Vercel detectará Next.js automáticamente.
4. Deploy.
5. Sustituye `TU-DOMINIO.vercel.app` en `app/sitemap.ts` y `app/robots.ts` por el dominio final.

## Próxima fase sugerida
- Supabase y panel de administración.
- Favoritos persistentes con cuenta.
- RFQ / solicitudes de cotización.
- Registro/verificación de proveedores.
- Matching por fotografía y búsqueda semántica.
- Score dinámico basado en datos verificados.

## Datos
La edición inicial contiene 58 proveedores/candidatos mexicanos. Consulta `README_INVESTIGACION.md` para metodología y limitaciones.

# Moving Padhai Point off Higgsfield

The current deployment adapter targets Cloudflare Workers and the app imports internal Higgsfield workspace packages. To deploy independently, first replace the Worker-only Vite setup with the public TanStack Start + Nitro Node adapter, remove unused Higgsfield workspace packages and replace any imports still required from them. Then push the project to a GitHub repository you control and connect it in Render or Vercel.

Official TanStack Start deployment guide: https://tanstack.com/start/latest/docs/framework/react/guide/hosting
Render supports free static sites and free web services, but free web services sleep after 15 minutes idle. https://render.com/docs/free

Do not deploy using the placeholder commands in render.yaml; they are deliberately a guard, not a working deployment. The Higgsfield-hosted site remains available until an external deployment is configured and tested.

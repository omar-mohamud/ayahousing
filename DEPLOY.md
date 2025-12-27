# Deploy to Vercel

## Quick Deploy (Recommended)

1. **Go to**: https://vercel.com/new?import=omar-mohamud/ayahousing
2. **Sign in** with your GitHub account
3. **Click "Import"** - Vercel will automatically detect Next.js
4. **Click "Deploy"** - Your site will be live in ~2 minutes!

## Automatic Deployments

Once connected, Vercel will automatically deploy:
- ✅ Every push to `main` branch → Production deployment
- ✅ Every pull request → Preview deployment
- ✅ No manual steps needed!

## Your Site Will Be Live At:
- Production: `https://ayahousing.vercel.app` (or your custom domain)
- Preview: `https://ayahousing-git-<branch>-yourname.vercel.app`

## Manual CLI Deploy (Alternative)

If you prefer CLI:
```bash
cd web
npx vercel login
npx vercel --prod
```

---

**Note**: The codebase has been cleaned and is ready for deployment. All Prisma dependencies and unused files have been removed.


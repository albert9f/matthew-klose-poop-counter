# Matthew Klose Poop Counter - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Git installed

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Database**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update `DATABASE_URL` with your PostgreSQL connection string.

3. **Run Database Migration**
   ```bash
   npx prisma migrate dev --name init
   ```
   
   This will:
   - Create all database tables from schema.prisma
   - Generate Prisma Client for type-safe database queries
   - Apply any pending migrations

4. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Setup Options

### Option 1: Local PostgreSQL

**Install PostgreSQL:**
```bash
# Ubuntu/Debian
sudo apt-get install postgresql postgresql-contrib

# macOS
brew install postgresql
brew services start postgresql
```

**Create Database:**
```bash
psql -U postgres
CREATE DATABASE poop_counter;
\q
```

**Update .env:**
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/poop_counter?schema=public"
```

### Option 2: Supabase (Recommended for Cloud)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Project Settings > Database
4. Copy the connection string (URI format)
5. Update `.env`:
   ```
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   ```

### Option 3: Railway

1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Add PostgreSQL service
4. Copy the DATABASE_URL from the service variables
5. Update `.env` with the Railway connection string

### Option 4: PlanetScale (MySQL)

1. Go to [planetscale.com](https://planetscale.com)
2. Create a new database
3. Get connection string
4. Update `prisma/schema.prisma` datasource to use `mysql` instead of `postgresql`
5. Update `.env` with PlanetScale connection string

## 📊 Database Management

### View Database in Prisma Studio
```bash
npx prisma studio
```

Opens a visual database browser at http://localhost:5555

### Reset Database (Delete All Data)
```bash
npx prisma migrate reset
```

### Create New Migration After Schema Changes
```bash
npx prisma migrate dev --name your_migration_name
```

### Push Schema Without Migration (Development Only)
```bash
npx prisma db push
```

## 🔧 API Routes

All API routes are now created with mock data:

- **POST /api/poops** - Create new poop entry
- **GET /api/poops** - Get all entries (supports ?species=human/dog filter)
- **PUT /api/poops** - Update entry
- **DELETE /api/poops?id=xxx** - Delete entry
- **GET /api/analytics?timeRange=7d** - Get analytics data
- **GET /api/comparisons?subject1=matthew&subject2=ozzie** - Get comparison data
- **POST /api/comparisons** - Save comparison

### Enable Real Database Queries

After running migrations, uncomment the Prisma code in API routes:

1. Open `/src/app/api/poops/route.ts`
2. Uncomment `import { PrismaClient }` at the top
3. Uncomment `const prisma = new PrismaClient()`
4. Replace mock data responses with commented Prisma queries

Repeat for:
- `/src/app/api/analytics/route.ts`
- `/src/app/api/comparisons/route.ts`

## 🎨 Application Structure

```
src/
├── app/
│   ├── api/                 # API routes
│   │   ├── poops/          # CRUD operations
│   │   ├── analytics/      # Analytics aggregations
│   │   └── comparisons/    # Comparison logic
│   ├── analytics/          # Analytics dashboard page
│   ├── compare/            # Comparison tools page
│   ├── ozzie/              # Ozzie's dedicated page
│   ├── products/[slug]/    # Product detail pages
│   ├── track/              # Poop tracking form
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/             # Reusable components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ProductLineup.tsx
│   ├── Features.tsx
│   ├── Analytics.tsx
│   ├── Footer.tsx
│   └── PoopTracker.tsx     # Main tracking form
└── lib/
    └── utils.ts            # Utility functions

prisma/
└── schema.prisma           # Database schema
```

## 🧪 Testing

### Test API Routes

```bash
# Create a poop entry
curl -X POST http://localhost:3000/api/poops \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user1",
    "species": "human",
    "consistency": 4,
    "size": "medium",
    "color": "brown"
  }'

# Get all entries
curl http://localhost:3000/api/poops

# Get analytics
curl http://localhost:3000/api/analytics?timeRange=7d

# Get comparison
curl http://localhost:3000/api/comparisons?subject1=matthew&subject2=ozzie
```

## 📱 Features

### Current Features
- ✅ Apple-inspired landing page with animations
- ✅ Comprehensive poop tracking form (Bristol Scale 1-7)
- ✅ Multi-species tracking (Matthew + Ozzie)
- ✅ Analytics dashboard with 5 chart types
- ✅ Product showcase (4 poop types with specs)
- ✅ Comparison tools (Matthew vs Ozzie)
- ✅ Ozzie's dedicated page with achievements
- ✅ API routes with mock data
- ✅ Responsive mobile design

### Upcoming Features (See PROJECT_TASKS.txt)
- 🔄 Database integration with real data
- 🔄 User authentication
- 🔄 Image upload for poop photos
- 🔄 Push notifications for logging reminders
- 🔄 Export data to PDF/CSV
- 🔄 Premium subscription tiers
- 🔄 Social sharing features
- 🔄 Mobile app (React Native)

## 🐛 Troubleshooting

### "Cannot connect to database"
- Verify PostgreSQL is running: `pg_isready`
- Check DATABASE_URL is correct in .env
- Ensure database exists: `psql -U postgres -l`
- Check firewall rules for cloud databases

### "Module not found" errors
- Run `npm install` to ensure all dependencies are installed
- Delete `node_modules` and `.next`, then run `npm install` again
- Restart VS Code TypeScript server

### "Prisma Client not generated"
- Run `npx prisma generate`
- Check that schema.prisma has no syntax errors

### Port 3000 already in use
- Kill the process: `lsof -ti:3000 | xargs kill -9`
- Or use a different port: `npm run dev -- -p 3001`

## 📚 Documentation

- **Next.js 15 Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Recharts**: https://recharts.org/en-US/
- **Framer Motion**: https://www.framer.com/motion/

## 🤝 Contributing

This is a personal project for Matthew Klose to track poops for himself and his dog Ozzie. 

## 📄 License

Private project - All rights reserved.

## 🎉 Credits

Created with ❤️ by GitHub Copilot for Matthew Klose and Ozzie Klose.
Inspired by Apple's beautiful design philosophy... but for 💩.

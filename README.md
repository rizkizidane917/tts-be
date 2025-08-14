# ISpeak Backend (NestJS + PostgreSQL + Prisma)

ISpeak is an advanced **Text-to-Speech** platform with a scalable backend powered by **NestJS**, **PostgreSQL**, and **Prisma ORM**.

This repository contains the backend API, handling:

- User authentication (JWT + cookies)
- Text-to-Speech conversion
- Conversion history storage

---

## 🚀 Tech Stack

- [NestJS](https://nestjs.com/) - Scalable Node.js framework
- [PostgreSQL](https://www.postgresql.org/) - Relational database
- [Prisma ORM](https://www.prisma.io/) - Type-safe database access
- [JWT Authentication](https://jwt.io/) - Secure user sessions

---

## 📦 Installation

### Prerequisites

- Node.js ≥ 18
- npm or yarn
- PostgreSQL installed and running

### 1. Clone repository

```bash
git clone https://github.com/rizkizidane917/tts-be.git
cd tts-be
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

```bash
DATABASE_URL=postgresql://postgres.duwisbgduakjjujetqpo:!Kmzway87aa123@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.duwisbgduakjjujetqpo:!Kmzway87aa123@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres
JWT_SECRET="super_secret_key"
JWT_EXPIRES_IN="1d"
NODE_ENV=development
PORT=4001
HOST_WEB=http://localhost:3000,https://tts-fe-one.vercel.app
```

### 4. Database setup

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 5. Run backend

```bash
nest start --watch
```

### 6. API runs at

```bash
http://localhost:4001/api
```

## 📦 Design Decision:

### Framework

NestJS

- Modular and scalable architecture
- Built-in dependency injection
- Strong TypeScript support

Trade off:

- Requires the Node.js runtime, which has a higher memory footprint than some lower-level runtimes.
- More opinionated structure may limit flexibility

### Database

PostgreSQL

- ACID-compliant and reliable for relational data
- Good support for structured schemas and JSON fields
- Works well with Prisma ORM

Trade Off:

- Advanced configuration and replication setups can be more complex
- Slightly more resource-intensive for simple read-heavy workloads

### ORM

Prisma

- Type-safe database access
- Simple migrations and schema management
- Great developer experience with auto-completion

Trade Off:

- Requires code generation step
- Slight performance overhead for very complex queries due to abstraction.

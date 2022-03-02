# RedisOM example as single main DB

This project shows the usage of Redis DB as main DB using RedisOM package.
## Getting Started

You need Redis.io account and database create in the free tier.
Simply get the authenticated URL for the server and paste in the .env.local file.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

On the Create page you can register new cars.
On the Search page you can query by exact MAKE, MODEL and partial description.
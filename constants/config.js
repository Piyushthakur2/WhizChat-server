const isProduction = process.env.NODE_ENV === "production";

const productionOrigins = [
  process.env.CLIENT_URL,
  "https://whizchat-frontend.vercel.app" // Your Vercel frontend URL
];

const developmentOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "http://localhost:3000"
];

export const corsOptions = {
  origin: isProduction ? productionOrigins : developmentOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Cookie",
    "Set-Cookie"
  ],
  exposedHeaders: ["Set-Cookie"]
};

export const WHIZCHAT_TOKEN = "WhizChat-token";

export const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  domain: isProduction ? new URL(process.env.CLIENT_URL).hostname : undefined,
  maxAge: 15 * 24 * 60 * 60 * 1000 // 15 days
};
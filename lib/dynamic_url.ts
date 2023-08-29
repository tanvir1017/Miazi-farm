export const dynamic_url =
  process.env.NODE_ENV !== "production"
    ? process.env.LOCALHOST_URL
    : process.env.PRODUCTION_URL;

import { object, parse, required, safeParse, string } from 'valibot';

const envSchema = object({
  VITE_API_URL: string()
});

const res = safeParse(envSchema, process.env);

if (!res.success) {
  throw new Error(`Invalid environment variables: ${res.error}`);
}

export const env = res.data;
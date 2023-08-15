import { Input, array, number, object, string } from 'valibot';

export const newsSchema = object({
  id: number(),
  title: string(),
  htmlContent: string(),
  description: string(),
  author: string(),
  authorId: number(),
  newsDate: string(),
  commentsNumber: number()
});

export const newsArraySchema = array(newsSchema);

export type NewsItem = Input<typeof newsSchema>;
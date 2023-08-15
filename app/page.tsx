import NewsArticle from '@/components/News/Article';
import { newsArraySchema } from '@/schemas/news';
import { get } from '@/utils/requests';
import { of } from 'fp-ts/lib/Task';
import { getOrElse } from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import { Input } from 'valibot';

const getData = pipe(
  get('/news/last-news', {
    schema: newsArraySchema,
    params: {
      page: "0"
    }
  }),
  getOrElse(() => of([] as Input<typeof newsArraySchema>))
);

export default async function Home() {
  const res = await getData();

  return (
    <main className="center-menu">
      <h4>Guest Header</h4>
      <div className="center-content">
        <a className="bbcode" href="signup.php" rel="external" target="_blank">
          Join us
        </a>{" "}
        to be able to download maps, jumping-movies and other things. It&apos;s the
        users responsibility to read and know the{" "}
        <a className="bbcode" href="rules.php" rel="external" target="_blank">
          rules
        </a>
        .
      </div>
      <br />
      {res?.map((item) => <NewsArticle key={item.id} newsItem={item} />)}
    </main>
  );
}

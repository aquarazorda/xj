import { NewsItem } from '@/schemas/news';
import Image from "next/image";

type Props = {
  newsItem: NewsItem;
}

export default function NewsArticle({ newsItem }: Props) {
  return (
    <section className="news-section side-menus">
      <article className="news-text">
        <header className="clearfix">
          <p className="news-title">
            <span className="bold">News:</span> {newsItem.title}
          </p>
          <p className="news-date smalltext">{newsItem.newsDate}</p>
          <p className="news-author smalltext">
            Written by:{" "}
            <a
              className="news_author"
              href="/web/20220420134731/https://xtreme-jumps.eu/user.php?id.45306"
            >
              {newsItem.author}
            </a>
          </p>{" "}
          <p className="news-comments smalltext right-content">
            {" "}
            <a href="/web/20220420134731/https://xtreme-jumps.eu/comment.php?comment.news.2707">
              Comments: {newsItem.commentsNumber}
            </a>
          </p>{" "}
          <Image src="/images/xjbanner_Maps.png" alt="Xtreme-Jumps Maps" width="568" height="70" />
        </header> 
        <br />
        <div dangerouslySetInnerHTML={{ __html: newsItem.description }} />
      </article>
    </section>
  );
}

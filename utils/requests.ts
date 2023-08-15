import { tryCatch } from "fp-ts/lib/TaskEither";
import { env } from "./env";
import { AnySchema, BaseSchema, Input, UnknownSchema, parse } from 'valibot';

type ApiPath = "/news/last-news" | "/news/news" | "news/release";

type GetProps<T> = {
  schema: BaseSchema<T>;
  params?: Record<string, string>;
};

export const get = <T>(path: ApiPath, props: GetProps<T>) => {
  const url =
    env.VITE_API_URL +
    path +
    (props?.params ? "?" + new URLSearchParams(props.params) : "");

  return tryCatch(
    () =>
      fetch(url, {
        method: "GET",
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((res) => parse(props.schema, res)) as Promise<Input<typeof props.schema>>,
    (reason) => new Error(String(reason))
  );
};

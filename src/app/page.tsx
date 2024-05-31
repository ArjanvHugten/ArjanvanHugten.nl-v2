import {
  HashtagIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-24">
      <div className="py-2">
        <h1 className="text-2xl font-bold">Arjan van Hugten</h1>
      </div>
      <div className="py-2">
        <LinkIcon className="size-5 inline" />
        <a
          href="https://www.linkedin.com/in/arjan-van-hugten-090b1511a/"
          target="_blank"
          className="underline"
        >
          LinkedIn
        </a>
        <span className="font-bold"> / </span>
        <CodeBracketIcon className="size-5 inline" />
        <a
          href="https://stackoverflow.com/users/6421230/a-van-hugten"
          target="_blank"
          className="underline"
        >
          Stack Overflow
        </a>
        <span className="font-bold"> / </span>
        <HashtagIcon className="size-5 inline" />
        <a
          href="https://github.com/ArjanvHugten"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}

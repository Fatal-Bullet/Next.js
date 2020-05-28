import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Hello Wolrd 👋</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

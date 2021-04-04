import Link from 'next/link';
import BoomButton from '../components/boom';

export default function Home() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-6xl text-blue-700">Next.js boilerplate</h1>
      <Link href="/boom">Big bada boom!</Link>
      <BoomButton />
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function ProductOverview() {
  return (
    <section className="py-5">
     

      {/* Product Overview */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Product Overview</h2>
      </div>

      <div className="flex justify-center mb-8">
        <Image
          src="/images/phones.png"
          alt="Mobile App Screenshots"
          width={600}
          height={400}
          className="rounded-xl shadow-lg max-w-full h-auto transition-transform hover:scale-102"
        />
      </div>

      <div className="flex justify-center">
        <Link
          href="https://play.google.com/store/search?q=iddirnet&c=apps&hl=en"
          className="inline-block bg-white text-orange-400 border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-50 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Mobile App
        </Link>
      </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import NavBar from '../Navigation';
import SystemArchitecture from '../systemarchitecture';
import TargetUsers from '../targetusers/indes';
import ProductOverview from '../productOverview';

export default function HomePage() {
  const [currentInfoImage, setCurrentInfoImage] = useState(0);
  const infoImages = ['/images/infor1.png', '/images/infor2.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfoImage((prev) => (prev + 1) % infoImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [infoImages.length]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <NavBar />

      {/* Main Content Area — shifted right */}
      <main className="ml-64 w-full p-6 md:p-8">
        {/* Hero Section — Elegant & Centered */}
        <section id="home" className="pt-6 pb-12 max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              No more guesswork, just trust. Just{' '}
              <span className="text-orange-500">IddirNet.</span>
            </h1>

            <div className="flex justify-center mb-8">
              <Image
                src="/images/people.png"
                alt="Iddir Community Illustration"
                width={450}
                height={350}
                className=" max-w-full h-auto transition-transform hover:scale-105"
              />
            </div>

            <p className="text-lg md:text-xl leading-relaxed max-w-7xl mx-auto text-gray-600">
              IddirNet is a digital platform built for Ethiopian communities, designed to modernize the traditional iddir system.
              It brings accountability, clarity, and convenience to one of Ethiopia's most cherished social institutions,
              empowering members to manage contributions, track finances, and reserve shared resources with full transparency.
              We bring communities together. IddirNet makes it easy to join, support, and connect with others, sharing life's joys and easing burdens all in one trusted space.
            </p>

            {/* Feature Boxes — Card Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Feature 1 */}
              <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <p className="text-orange-600 text-base leading-relaxed group-hover:text-orange-700 transition-colors">
                  Every contribution, expense, and balance is recorded digitally, no more guesswork or disputes.
                </p>
              </div>

              {/* Feature 2 - Highlighted */}
              <div className="bg-orange-500 text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <p className="text-base leading-relaxed">
                  Members can easily check availability and reserve community assets without having to rely on word of mouth.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <p className="text-orange-600 text-base leading-relaxed group-hover:text-orange-700 transition-colors">
                  While modernizing them, IddirNet honors the core values of mutual aid and solidarity that defines iddirs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto">
   
          <section id="system-architecture">
            <SystemArchitecture />
          </section>

      
          <section id="target-users">
            <TargetUsers />
          </section>

          <section id="product-overview">
            <ProductOverview />
          </section>

          <section id="admin-dashboard" className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     
              <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Admin Dashboard</h3>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/dashboard.png"
                    alt="Admin Dashboard Preview"
                    width={900}
                    height={700}
                    className="rounded-xl max-w-full h-auto shadow-inner"
                  />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A web-based dashboard for Iddir administrators to manage members, contributions, events,
                  and resources with real-time insights and full control.
                </p>
                <div className="flex justify-center">
                  <Link href="https://iddirnet-beige.vercel.app/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-700 font-medium">
                    Explore Dashboard
                    <Image
                      src="/images/arrow.png"
                      alt="Go to Admin Dashboard"
                      width={24}
                      height={24}
                      className="transition-transform hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

     
              <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Informational Website</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-full max-w-[900px] aspect-[1160/700] rounded-xl overflow-hidden shadow-inner">
                    {infoImages.map((src, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentInfoImage ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Informational Website Slide ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A public-facing website that explains the IddirNet mission, benefits, and how to get started.
                  Designed to educate and onboard new communities.
                </p>
                <div className="flex justify-center">
                  <Link href="https://iddirnet.vercel.app/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-700 font-medium">
                    Visit Website
                    <Image
                      src="/images/arrow.png"
                      alt="Go to Info Website"
                      width={24}
                      height={24}
                      className="transition-transform hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

   
          <div className="border-t border-gray-100 my-12"></div>

     
          <section id="erd" className="py-12 text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Entity Relationship Diagram (ERD)</h2>
            <Image
              src="/images/ERD.png"
              alt="Entity Relationship Diagram"
              width={1000}
              height={600}
              className="rounded-xl shadow-lg max-w-full h-auto mx-auto"
            />
          </section>

   
          <div className="border-t border-gray-100 my-12"></div>

          <section id="features" className="py-12">
            <h2 className="text-3xl font-bold text-orange-400 text-center mb-12">IddirNet Features</h2>

            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Inventory Tracking Module</h3>
                <p className="leading-relaxed">
                  Manages the full lifecycle of Iddir resources, including items owned, borrowed, let, and rented.
                  It provides real-time updates on resource status, ensuring transparency and reducing disputes among members
                  because members can see if the materials are available or not. The module displays detailed information about
                  rented items alongside their corresponding amounts, enabling members to see the financial value of rented
                  resources and promoting accountability.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Resource Renting</h3>
                <p className="leading-relaxed">
                  Leaders will be able to see all the Iddirs that are renting out their materials.
                  They can then be able to decide which Iddir they want to rent from and select the materials they want to rent from that Iddir,
                  make the payment then collect the materials after being informed of the time to collect them.
                  Leaders will also be able to see other Iddir leaders who want to rent materials from them.
                  Once materials are rented out, the available materials will reduce in number since they are not currently available.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Payment Management Module</h3>
                <p className="leading-relaxed">
                  Facilitates easy handling of all types of payments within the Iddir, including monthly fees, fines for missed contributions or meetings, and rental payments for borrowed items. It automatically generates and issues digital receipts for every transaction, which are stored and accessible to all members. The module also lists members alongside the amounts and timestamps of their payments, enhancing transparency and preventing payment-related misunderstandings.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Member Management Module</h3>
                <p className="leading-relaxed">
                  Stores and manages member profiles, tracking their payment histories, borrowing activities, and participation in Iddir functions. It allows Iddir leaders to view active members, their statuses, and contribution records, fostering inclusive and informed community management. The members can also view members and leaders.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="md:w-12 flex-shrink-0 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">5</div>
              </div>
              <div className="bg-orange-100 text-gray-900 p-6 rounded-xl max-w-3xl">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Authentication & Security</h3>
                <p className="leading-relaxed">
                  Secures user access to the platform, allowing members to register, log in, and access only relevant information based on their roles (member and leader). Role-based access ensures sensitive financial and resource data is protected, maintaining community trust and privacy.
                </p>
              </div>
            </div>
          </section>

          <div className="h-16"></div>
        </div>
      </main>

      {/* Slow Rotation Animation for Target Image */}
      <style>
        {`
          @keyframes rotateSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-rotate-slow {
            animation: rotateSlow 20s linear infinite;
            transform-origin: center;
          }
        `}
      </style>
    </div>
  );
}
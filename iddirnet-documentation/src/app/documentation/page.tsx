import { FaArrowRight } from 'react-icons/fa';

export default function Documentation() {
    return (
        <div
            className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans"
            style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
        >
            <section>
                <h1
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: '#FF9800' }}
                >
                    Why Iddirnet?
                </h1>
                <p className="leading-relaxed text-black text-sm sm:text-base">
                    We bring communities together. IddirNet makes it easy to join, support, and connect with others, sharing life's joys
                    and easing burdens all in one trusted space. We are dedicated to strengthening the values of trust, transparency, and
                    solidarity within Ethiopian Iddirs.
                </p>
            </section>

            <section>
                <h1
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: '#FF9800' }}
                >
                    Project Overview
                </h1>
                <p className="leading-relaxed text-black text-sm sm:text-base"></p>
            </section>

            <section>
                <h1
                    className="text-2xl sm:text-3xl font-bold mb-6"
                    style={{ color: '#FF9800' }}
                >
                    Code structure
                </h1>
                <p className="leading-relaxed mb-8 sm:mb-20 text-black text-sm sm:text-base text-justify">
                    The architecture of IddirNet is organized into three main components: Backend, Frontend,
                    and Mobile, each designed to ensure clarity, scalability, and maintainability. The Mobile module
                    enables users to pay monthly contributions, receive digital receipts, view available resources in
                    their specific Iddir, and see the members within their Iddir. It also includes a renting feature that
                    allows Iddirs to rent from each other, supporting community collaboration. The Frontend dashboard
                    provides real-time analytics on payments for each Iddir, user activity, locations, and contributions,
                    empowering administrators with actionable insights. The Backend handles data storage using a PostgreSQL
                    database and integrates external APIs such as Daraja for payments and LocationIQ for geocoding addresses
                    to locations. This structure promotes efficient development, seamless integration of new features, and
                    robust data management across the entire platform.
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8">
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <img
                            src="images/backend.jpg"
                            alt="Backend"
                            className="w-full sm:w-100 h-300 object-cover rounded-lg mb-2"
                        />
                        <span className="text-lg font-medium" style={{ color: '#1E2736' }}>
                            Backend
                        </span>
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <img
                            src="images/frontend.jpg"
                            alt="Frontend"
                            className="w-full sm:w-100 h-210 object-cover rounded-lg mb-2"
                        />
                        <span className="text-lg font-medium" style={{ color: '#1E2736' }}>
                            Frontend
                        </span>
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-auto">
                        <img
                            src="images/backend.jpg"
                            alt="Mobile"
                            className="w-full sm:w-100 h-150 object-cover rounded-lg mb-2"
                        />
                        <span className="text-lg font-medium" style={{ color: '#1E2736' }}>
                            Mobile
                        </span>
                    </div>
                </div>
            </section>

            <div
                className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12 sm:space-y-16 font-sans"
                style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
            >
                <section className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="md:w-2/3">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FF9800' }}>
                            Quality Assurance
                        </h1>
                        <p className="leading-relaxed text-black text-sm sm:text-base text-justify">
                            Testing ensures that IddirNet delivers a reliable, secure, and user-friendly experience to Ethiopian Iddir communities.
                            It verifies all features work as intended, integrates seamlessly with payment and location services, and meets
                            performance, security, and compliance standards for the community's trust and ease of use.
                        </p>

                        <a
                            href="https://iddirnet-75e4b810c131.herokuapp.com/swagger/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 text-[#1E2736] hover:underline font-semibold text-sm sm:text-base"
                        >
                            Click here to view full swagger documentation
                            <FaArrowRight className="ml-2" />
                        </a>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <img
                            src="images/swagger.png"
                            alt="Swagger Documentation"
                            className="w-full max-w-xs h-auto rounded-lg border-2 border-[#FF9800] shadow-lg"
                        />
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-20">

                        <div className="lg:w-1/3 bg-white text-[#1E2736] rounded-lg p-4 sm:p-6 shadow-md flex flex-col border-2 border-[#FF9800]">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#FF9800' }}>
                                Backend Testing
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                                <li>Functional APIs validation with Postman</li>
                                <li>Integration checks with Daraja & LocationIQ APIs</li>
                                <li>Load and performance tests using JMeter</li>
                                <li>Security vulnerability scans via OWASP ZAP</li>
                            </ul>
                        </div>

                        <div className="lg:w-1/3 bg-white text-[#1E2736] rounded-lg p-4 sm:p-6 shadow-md flex flex-col border-2 border-[#1E2736]">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4">
                                Frontend Testing
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                                <li>Selenium automated UI and role-based access tests</li>
                                <li>Usability evaluations for admin dashboard</li>
                                <li>API data consumption and UI integration checks</li>
                                <li>Cross-browser compatibility tests (Chrome, Firefox)</li>
                            </ul>
                        </div>

                        <div className="lg:w-1/3 bg-white text-[#1E2736] rounded-lg p-4 sm:p-6 shadow-md flex flex-col border-2 border-[#FF9800]">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#FF9800' }}>
                                Mobile Testing
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                                <li>Appium tests for member registration, payments, receipts</li>
                                <li>Usability testing on low-end devices for diverse users</li>
                                <li>Performance validation on Android devices</li>
                                <li>API integration checks with Daraja and LocationIQ</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <div
                    className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans"
                    style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
                >

                    <section>
                        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: '#FF9800' }}>
                            Deployment Strategy
                        </h1>
                        <p className="leading-relaxed text-[#1E2736] max-w-4xl mx-auto mb-8 sm:mb-12 text-justify text-sm sm:text-base">
                            Deploying the IddirNet platform components involved careful consideration of performance, scalability,
                            ease of maintenance, and user accessibility. We chose deployment solutions that maximize reliability while aligning
                            with community needs and technology stack strengths. Across backend, frontend, and mobile app deployments, our strategy
                            emphasizes automation, seamless integration, and a strong user experience to ensure fast delivery and sustainable operations.
                        </p>

                        <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">

                            <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 border-4 border-[#FF9800]">
                                <div
                                    className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9800] text-white text-center font-bold text-sm sm:text-lg select-none"
                                    style={{ lineHeight: '2.5rem' }}
                                >
                                    1
                                </div>
                                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#FF9800]">Backend Deployment – Heroku</h2>
                                <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    We chose Heroku for hosting our backend because it offers an easy deployment process, tight PostgreSQL integration,
                                    and reliable management of server resources. This lets us focus on developing features while Heroku handles scaling and uptime,
                                    essential for secure and efficient API operations supporting payments and notifications.
                                </p>
                            </div>

                            <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 border-4 border-[#1E2736]">
                                <div
                                    className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E2736] text-white text-center font-bold text-sm sm:text-lg select-none"
                                    style={{ lineHeight: '2.5rem' }}
                                >
                                    2
                                </div>
                                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#1E2736]">Frontend Deployment – Vercel</h2>
                                <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    Vercel was selected for the frontend dashboard due to its seamless integration with React, automated end-to-end deployment, and global content delivery network
                                    ensuring fast and responsive user interfaces. Vercel's preview environments enable smooth collaboration and quick iteration of UI features.
                                </p>
                            </div>

                            <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 border-4 border-[#FF9800]">
                                <div
                                    className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9800] text-white text-center font-bold text-sm sm:text-lg select-none"
                                    style={{ lineHeight: '2.5rem' }}
                                >
                                    3
                                </div>
                                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#FF9800]">Mobile Deployment – APK Bundles & Google Play Store</h2>
                                <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    The mobile app is packaged as APK bundles to optimize size for diverse Android devices common in Ethiopian communities,
                                    and published on Google Play Store to reach users efficiently with easy updates and secure delivery.
                                </p>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
export default function Deployment(){
    return(
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
    )
}
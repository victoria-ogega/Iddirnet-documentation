export default function CodeStructure() {
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
                            src="images/mobile.jpg"
                            alt="Mobile"
                            className="w-full sm:w-100 h-150 object-cover rounded-lg mb-2"
                        />
                        <span className="text-lg font-medium" style={{ color: '#1E2736' }}>
                            Mobile
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
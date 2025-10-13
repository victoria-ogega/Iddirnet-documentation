"use client";

import Image from "next/image"
export default function ProductOverview() {
    const modules = [
        {
            name: "Inventory Tracking Module",
            description: "Manages the full lifecycle of Iddir resources, including items owned, borrowed, let, and rented. It provides real-time updates on resource status, ensuring transparency and reducing disputes among members because members can see if the materials are available or not. The module displays detailed information about rented items alongside their corresponding amounts, enabling members to see the financial value of rented resources and promoting accountability."
        },
        {
            name: "Resource Renting",
            description: "Leaders will be able to see all the Iddirs that are renting out their materials. They can then be able to decide which Iddir they want to rent from and select the materials they want to rent from that Iddir, make the payment then collect the materials after being informed of the time to collect them. Leaders will also be able to see other Iddir leaders who want to rent materials from them. Once materials are rented out, the available materials will reduce in number since they are not currently available."
        },
        {
            name: "Payment Management Module",
            description: "Facilitates easy handling of all types of payments within the Iddir, including monthly fees, fines for missed contributions or meetings, and rental payments for borrowed items. It automatically generates and issues digital receipts for every transaction, which are stored and accessible to all members. The module also lists members alongside the amounts and timestamps of their payments, enhancing transparency and preventing payment-related misunderstandings."
        },
        {
            name: "Member Management Module",
            description: "Stores and manages member profiles, tracking their payment histories, borrowing activities, and participation in Iddir functions. It allows Iddir leaders to view active members, their statuses, and contribution records, fostering inclusive and informed community management. The members can also view members and leaders."
        },
        {
            name: "Authentication and Access Control Module",
            description: "Secures user access to the platform, allowing members to register, log in, and access only relevant information based on their roles (member and leader). Role-based access ensures sensitive financial and resource data is protected, maintaining community trust and privacy."
        }
    ];

    return (
        <div className="mt-30 ml-5 mr-5">
            <div className="mt-16 mb-16">
                <h1 className="md:text-[30px] text-center mb-10 font-bold" style={{ color: '#FF9800' }}>IddirNet Features</h1>
                <div className="max-w-4xl mx-auto space-y-8">
                    {modules.map((module, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#FF9800' }}>
                                {module.name}
                            </h2>
                            <p className="text-sm sm:text-base text-black leading-relaxed">
                                {module.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

   
        <div
            className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans"
            style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
        >
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
                        {/* <img
                            src="images/mobile.jpg"
                            alt="Mobile"
                            className="w-full sm:w-100 h-150 object-cover rounded-lg mb-2"
                        /> */}
                        <span className="text-lg font-medium" style={{ color: '#1E2736' }}>
                            Mobile
                        </span>
                    </div>
                </div>
            </section>
        </div>
    
        </div>
    )
}
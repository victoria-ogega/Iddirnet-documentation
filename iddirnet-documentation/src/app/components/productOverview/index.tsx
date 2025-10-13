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

            <div>
                <h1 className="md:text-[30px] xl:text-[30px] 2xl:text-[30px] sm:text-[20px]  text-center mb-5 font-bold" style={{ color: '#FF9800' }}>System Architecture Diagram</h1>
                <div className="flex justify-center">
                    <a
                        href="https://lucid.app/lucidchart/6393432c-4a1d-4bfc-ba5d-4481f24f53eb/edit?viewport_loc=-3156%2C-4813%2C15854%2C7496%2C0_0&invitationId=inv_8f37ff96-0b6a-4f26-adb2-5e7f63830814"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl">
                            <Image
                                src="/images/System architecture.png"
                                alt="System Architecture Diagram"
                                width={1700}
                                height={1500}
                                className="w-full h-auto rounded"
                            />
                            <p className="mt-3 text-sm sm:text-base text-black">
                                The system architecture illustrates how IddirNet's components interact, from the mobile app and web dashboard to the backend services and database. This design ensures scalability, security, and seamless data flow across all platform features.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            
            <h1 className="md:text-[30px] xl:text-[30px] 2xl:text-[30px] sm:text-[20px] text-center mt-20 font-bold" style={{ color: '#FF9800' }}>Entity Relationship Diagram</h1>
            <div className="flex flex-col gap-8">
                <div className="w-full leading-relaxed text-sm sm:text-base">
                    <p className="text-center max-w-4xl mx-auto text-black">The ERD for IddirNet presents a well-structured database design that effectively supports the platform's core purpose: bringing
                        transparency and efficiency to Ethiopian iddir communities. It clearly defines key entities such as users, iddirs, transactions, payments,
                        and resources and establishes logical relationships between them. By linking members to their respective iddirs and tracking every financial
                        contribution and resource rental, the model ensures accountability and reduces ambiguity. The inclusion of timestamps, status flags, and detailed
                        transaction records supports both day-to-day operations and future reporting needs.</p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <Image
                            src="/images/ERD.png"
                            alt="Entity Relationship Diagram"
                            width={800}
                            height={600}
                            className="w-full h-auto rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
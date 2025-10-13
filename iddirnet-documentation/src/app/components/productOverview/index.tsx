// "use client";

// import Image from "next/image"
// export default function ProductOverview() {
//     const products = [
//         {
//             name: "Informational website",
//             imageUrl: "/images/informational website.png",
//             link: "https://iddirnet.vercel.app/",
//         },
//         {
//             name: "Dashboard",
//             imageUrl: "/images/Dashboard(1).png",
//             link: "https://iddirnet-beige.vercel.app/login",
//         },
//         {
//             name: "Mobile App",
//             imageUrl: "/images/Welcome(1).png",
//             link: "",
//         },
//     ];
//     return (

//         <div className="mt-30 ml-10 mr-10">
//             <h1 className="md:text-[30px] text-center mb-5 font-bold">Product Overview</h1>

//             <div className="flex justify-center gap-60 p-6 mb-15 ">
//                 {products.map((product) => (
//                     <a
//                         key={product.name}
//                         href={product.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block w-98 text-center transition-transform hover:scale-105"
//                     >
//                         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                             <img
//                                 src={product.imageUrl}
//                                 alt={product.name}
//                                 className="w-full h-62 object-cover"
//                             />
//                             <p className="mt-2 font-medium text-gray-800 text-[20px]">{product.name}</p>
//                         </div>
//                     </a>
//                 ))}
//             </div>

//             <div>
//                 <h1 className="text-[30px] text-center mb-5 font-bold">System Architecture Diagram</h1>
//                 <Image
//                     src="/images/System architecture.png"
//                     alt="Description of my image"
//                     width={1600}
//                     height={1}
//                     className=""
//                 />
//             </div>
//             <h1 className="text-[30px] text-center mt-20 font-bold">Entity Relationship Diagram</h1>
//             <div className="flex gap-15">
//                 <div className="">
//                     <Image
//                         src="/images/ERD.png"
//                         alt="Description of my image"
//                         width={800}
//                         height={1}
//                         className=""
//                     />
//                 </div>
//                 <div className="w-180 text-xl leading-relaxed text-[20px]  pt-40">
//                     <p className=" ">The ERD for IddirNet presents a well-structured database design that effectively supports the platform’s core purpose: bringing
//                         transparency and efficiency to Ethiopian iddir communities. It clearly defines key entities such as users, iddirs, transactions, payments,
//                         and resources and establishes logical relationships between them. By linking members to their respective iddirs and tracking every financial
//                         contribution and resource rental, the model ensures accountability and reduces ambiguity. The inclusion of timestamps, status flags, and detailed
//                         transaction records supports both day-to-day operations and future reporting needs.</p>
//                 </div>
//             </div>
//         </div>
//     )
// }



"use client";

import Image from "next/image"
export default function ProductOverview() {
    const products = [
        {
            name: "Informational website",
            imageUrl: "/images/informational website.png",
            link: "https://iddirnet.vercel.app/  ",
        },
        {
            name: "Dashboard",
            imageUrl: "/images/Dashboard(1).png",
            link: "https://iddirnet-beige.vercel.app/login  ",
        },
        {
            name: "Mobile App",
            imageUrl: "/images/Welcome(1).png",
            link: "",
        },
    ];
    return (

        <div className="mt-30 ml-5 mr-5">
            <h1 className="md:text-[30px] text-center mb-5 font-bold">Product Overview</h1>

            <div className="flex flex-wrap justify-center md:gap-6  xl:gap-20  lg:gap-15  2xl:gap-40     p-6 mb-15 ">
                {products.map((product) => (
                    <a
                        key={product.name}
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full sm:w-[240px] md:w-[223px] lg:w-[253px] 2xl:w-[450px] text-center transition-transform hover:scale-105"
                    >
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-62 object-cover"
                            />
                            <p className="mt-2 font-medium text-gray-800 text-[20px]">{product.name}</p>
                        </div>
                    </a>
                ))}
            </div>

            <div>
                <h1 className="md:text-[30px] xl:text-[30px] 2xl:text-[30px] sm:text-[20px]  text-center mb-5 font-bold">System Architecture Diagram</h1>
                <div className="flex justify-center">
                    <Image
                        src="/images/System architecture.png"
                        alt="Description of my image"
                        width={1600}
                        height={1}
                        className="w-full max-w-full h-auto"
                    />
                </div>
            </div>
            <h1 className="md:text-[30px] xl:text-[30px] 2xl:text-[30px] sm:text-[20px] text-center mt-20 font-bold">Entity Relationship Diagram</h1>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-15">
                <div className="">
                    <div className="flex justify-center">
                        <Image
                            src="/images/ERD.png"
                            alt="Description of my image"
                            width={800}
                            height={1}
                            className="w-full max-w-full h-auto"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-180 text-xl leading-relaxed md:text-[20px] lg:text-[16px] xl:text-[20px] 2xl:text-[20px] sm:text-[15px] 2xl:pt-40 xl:pt-9 lg:pt-5">
                    <p className=" ">The ERD for IddirNet presents a well-structured database design that effectively supports the platform’s core purpose: bringing
                        transparency and efficiency to Ethiopian iddir communities. It clearly defines key entities such as users, iddirs, transactions, payments,
                        and resources and establishes logical relationships between them. By linking members to their respective iddirs and tracking every financial
                        contribution and resource rental, the model ensures accountability and reduces ambiguity. The inclusion of timestamps, status flags, and detailed
                        transaction records supports both day-to-day operations and future reporting needs.</p>
                </div>
            </div>
        </div>
    )
}
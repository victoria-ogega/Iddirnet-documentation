
import Image from "next/image"
export default function HomeSection() {
    return (
        <div className="ml-7 mr-7 ">
            <h1 className="md:text-3xl xl:text-3xl 2xl:text-3xl mb-4 mt-30 font-bold sm:text-[100px]">No more guesswork, just trust. <span className="text-orange-400">Just IddirNet.</span> </h1>

            <div className="md:flex  xl:flex  2xl:flex  sm:flex md:gap-40 xl:gap-40 2xl:gap-40 sm:gap-40">

                <div className="flex md:w-250  xl:w-250  2xl:w-250  sm:w-500 leading-relaxed md:text-[17px] xl:text-[20px] 2xl:text-[20px] sm:text-[15px]">
                    <p>IddirNet is a digital platform built for Ethiopian communities, designed to modernize the
                        traditional iddir system. It brings accountability, clarity, and convenience to one of Ethiopia’s most
                        cherished social institutions empowering members to manage contributions, track finances, and reserve shared
                        resources with full transparency.We bring communities together.IddirNet makes it easy to join,
                        support, and connect with others, sharing life's joys
                        and easing burdens all in one trusted space. We are  dedicated to strengthening the values of trust, transparency, and
                        solidarity within Ethiopian Iddirs.</p>
                </div>
                <div className="">
                    <Image
                        src="/images/community and togetherness.jpg"
                        alt="Description of my image"
                        width={200}
                        height={1}
                        className="" />
                </div>

            </div>
            <div className="md:flex  xl:flex 2xl:flex  mt-10 md:gap-7 xl:gap-7 2xl:gap-10  space-y-8 md:space-y-0  ">

                <div className="border-1 border-orange-400 md:w-250 xl:w-120  2xl:w-135 sm:w-10 p-4 md:text-[17px] xl:text-[17px] 2xl:text-[17px] sm:text-[10px]">
                    <p className=""> Every contribution, expense, and balance is recorded digitally, no more guesswork or disputes. </p>
                    <Image
                        src="/images/Contribution.jpeg"
                        alt="Description of my image"
                        width={160}
                        height={1}
                        className="mx-auto mt-3"/>
                </div>

                <div className="border-1 border-orange-400 md:w-250 xl:w-120  2xl:w-135 sm:w-10 p-4 md:text-[17px] xl:text-[17px] 2xl:text-[17px] sm:text-[10px]">
                    <p className="">Members can easily check availability and reserve community assets without having to rely on word of mouth.</p>
                    <Image
                        src="/images/resources-removebg-preview.png"
                        alt="Description of my image"
                        width={160}
                        height={1}
                        className="mx-auto mt-3" />
                </div>

                <div className="border-1 border-orange-400 md:w-250 xl:w-120  2xl:w-135 sm:w-10 p-4 md:text-[17px] xl:text-[17px] 2xl:text-[17px] sm:text-[10px]">
                    <p className="b">While modernizing them, IddirNet honors the core values of mutual aid and solidarity that defines iddirs.</p>
                    <Image
                        src="/images/mutual_solidarity-removebg-preview.png"
                        alt="Description of my image"
                        width={160}
                        height={1}
                        className="mx-auto mt-3" />
                </div>
            </div>

        </div>
    )

}


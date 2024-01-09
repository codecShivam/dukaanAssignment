import Image from "next/image";
import dropDownIcon from "@/../../public/images/svg/arrow.svg";

interface InformationProps { }

const Information: React.FC<InformationProps> = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-[#1A181E]">Overview</h2>
                <button className="flex items-center hover:bg-slate-100 justify-center bg-white gap-[7px] border rounded border-[#D9D9D9] w-[137px] h-9">
                    <span className="text-base">Last Month</span>
                    <Image
                        src={dropDownIcon}
                        height={12}
                        width={12}
                        alt="Arrow down icon"
                    />
                </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full bg-white py-4 px-5 rounded-lg shadow:0px_2px_6px_0px_rgba(26,_24,_30,_0.04)] flex flex-col gap-4">
                    <div className="text-base">Online orders</div>
                    <span className="sm:text-4xl text-2xl font-medium">231</span>
                </div>
                <div className="w-full bg-white py-4 px-5 rounded-lg shadow:0px_2px_6px_0px_rgba(26,_24,_30,_0.04)] flex flex-col gap-4">
                    <div className="text-base">Amount received</div>
                    <span className="sm:text-4xl text-2xl font-medium">₹23,92,312.19</span>
                </div>
            </div>
        </div>
    );
};

export default Information;

import Image from "next/image";
import walletIcon from "@/../../public/images/svg/walletIcon.svg"

const Base = () => {
    return (
        <div className="bg-[#353C53] py-[6px] px-3 flex items-center gap-3 rounded w-full">
            <div className="p-[6px] bg-white/10 rounded">
                <Image src={walletIcon} alt="wallet" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-[2px]">
                <div className="text-subBodyRegular text-white/80">Available credits</div>
                <div className="text-base font-medium">222.10</div>
            </div>
        </div>
    );
}

export default Base;

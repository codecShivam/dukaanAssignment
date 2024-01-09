import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import searchIcon from "@/../../public/images/svg/search.svg";
import downloadIcon from "@/../../public/images/svg/download.svg";
import sortingIcon from "@/../../public/images/svg/sorting.svg";
import exclamationIcon from "@/../../public/images/svg/exclamation.svg";
import arrowDownIcon from "@/../../public/images/svg/arrowDown.svg";

interface TransactionItem {
    orderId: number;
    orderDate: string;
    orderAmount: string;
    transactionFees: string;
}

const transactionsData: TransactionItem[] = Array(20).fill({
    orderId: 281209,
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
});

const Transactions: FC = () => (
    <div className="flex flex-col gap-[20px]">
        <h2 className="text-xl font-medium text-[#1A181E]">Transactions | This Month</h2>
        <div className="bg-white rounded shadow:0px_2px_6px_0px_rgba(26,_24,_30,_0.04)] px-3 pt-3 pb-6">
            <div className="flex items-center justify-between mb-3">
                <div className="flex bg-white gap-2 border rounded border-[#D9D9D9] px-4 py-[10px] w-1/3 overflow-hidden sm:w-auto">
                    <Image src={searchIcon} height={14} width={14} alt="Search icon" />
                    <input type="text" placeholder="Search by order ID..." className="outline-none" />
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center min-w-4 hover:bg-slate-100 bg-white gap-[6px] border rounded border-[#D9D9D9] px-3 py-[6px] w-fit">
                        <span>Sort</span>
                        <Image src={sortingIcon} height={16} width={16} alt="Sort icon" />
                    </button>
                    <button className="flex items-center min-w-5 hover:bg-slate-100 bg-white gap-2 border rounded border-[#D9D9D9] p-2 w-fit">
                        <Image src={downloadIcon} height={20} width={20} alt="Download icon" />
                    </button>
                </div>
            </div>

            <div className="mb-6 text-[#4D4D4D]">
                <div className="bg-[#F2F2F2] text-xs sm:text-sm w-full px-3 py-[10px] rounded gap-10 flex items-center justify-between">
                    <div className="flex flex-1 font-medium">Order Id</div>
                    <div className="flex flex-1 font-medium gap-1">
                        <span>Order Date</span>
                        <Image src={arrowDownIcon} height={10} width={10} alt="Triangle icon" />
                    </div>
                    <div className="flex flex-1 justify-end font-medium">Order amount</div>
                    <div className="flex flex-1 justify-end font-medium gap-1">
                        <span>Transaction fees</span>
                        <Image src={exclamationIcon} height={14} width={14} alt="Exclamation icon" />
                    </div>
                </div>
                <div className="text-[#1A181E]">
                    {transactionsData.map((item, index) => (
                        <div
                            key={item.orderId + index}
                            className="px-3 py-[14px] rounded gap-10 flex items-center justify-between"
                        >
                            <Link href="#" className="flex flex-1 text-sm font-medium text-[#146EB4]">
                                #{item.orderId}
                            </Link>
                            <div className="flex flex-1 text-sm font-medium">{item.orderDate}</div>
                            <div className="flex flex-1 justify-end text-sm font-medium">{item.orderAmount}</div>
                            <div className="flex flex-1 justify-end text-sm font-medium gap-1">
                                <span>{item.transactionFees}</span>
                                <Image src={exclamationIcon} height={14} width={14} alt="Exclamation icon" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-6 my-6 text-[#4D4D4D]">
                    <button className="flex items-center bg-white gap-[6px] border rounded border-[#D9D9D9] pl-[6px] pr-3 py-[6px] w-fit hover:bg-slate-100">
                        <Image src={arrowDownIcon} height={10} width={10} alt="Previous icon" className="rotate-90" />
                        <span className="text-sm font-medium">Previous</span>
                    </button>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="py-[6px] px-2 rounded hover:bg-slate-100 cursor-pointer">1</span>
                        <span className="py-[6px] px-2 rounded">...</span>
                        <span className="bg-[#146EB4] text-white py-[6px] px-2 rounded">10</span>
                        <span className="py-[6px] px-2 rounded hover:bg-slate-100 cursor-pointer">11</span>
                        <span className="py-[6px] px-2 rounded hover:bg-slate-100 cursor-pointer">12</span>
                        <span className="hidden sm:block py-[6px] px-2 rounded hover:bg-slate-100 cursor-pointer">13</span>
                        <span className="hidden sm:block py-[6px] px-2 rounded hover:bg-slate-100 cursor-pointer">14</span>
                        <span className="hidden sm:block py-[6px] px-2 rounded hover:bg-slate-100 cursor-pointer">15</span>
                        <span className="hidden sm:block py-[6px] px-2 rounded hover-bg-slate-100 cursor-pointer">16</span>
                        <span className="hidden sm:block py-[6px] px-2 rounded hover-bg-slate-100 cursor-pointer">17</span>
                        <span className="hidden sm:block py-[6px] px-2 rounded hover-bg-slate-100 cursor-pointer">18</span>
                    </div>
                    <button className="flex items-center bg-white gap-[6px] border rounded border-[#D9D9D9] pl-3 pr-[6px] py-[6px] w-fit hover:bg-slate-100">
                        <span className="text-sm font-medium">Next</span>
                        <Image src={arrowDownIcon} height={10} width={10} alt="Next icon" className="-rotate-90" />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Transactions;

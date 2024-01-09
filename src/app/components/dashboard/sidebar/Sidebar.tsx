import Heading from "./Heading";
import Menu from "./Menu";

const Sidebar = () => {
    return (
        <div className="flex w-80 h-screen overflow-auto flex-col items-start justify-between text-white py-4 px-[0.63rem] bg-[#1E2640]">
            <div className="w-full flex flex-1 flex-col gap-6">
                <Heading />
                <Menu />
            </div>
        </div>
    );
}

export default Sidebar;

import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import { useMediaQuery } from "react-responsive";
import Profile from "../profile";

interface LayoutProps {
    children: ReactNode;
}

const Container = ({ children }: LayoutProps) => {
    const isAboveMedium = useMediaQuery({ query: "(min-width: 768px)" });
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 z-50">
                <Navbar />
            </div>
            <div className="pt-2">
                <div className="flex justify-between ">
                    <div className={`${isAboveMedium ? "ml-32" : "ml-16"} w-4/5`}>
                        <Searchbar />
                    </div>
                    <div className="w-auto px-4">
                        <Profile />
                    </div>
                </div>
            </div>

            <div className={` ${isAboveMedium ? "ml-32" : "ml-16"} mt-16`}>
                {children}
            </div>
        </div>
    );
};

export default Container;

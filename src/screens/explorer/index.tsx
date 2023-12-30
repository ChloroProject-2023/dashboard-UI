import Container from "@/components/container";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import {cardData} from "./ExplorerData";
import GridComponent from "@/components/card(s)/";
const Explorer = () => {
    return (
        <Container>
            <h1 className="text-5xl font-bold">Explorer</h1>
            <div className="flex gap-5 mt-5">
                <button className="flex w-24 h-auto p-3 border-2 rounded-lg gap-5 hover:bg-gray-100">
                    <p>Type</p>
                    <ChevronDownIcon className="w-4 h-4 mt-1"/>
                </button>
                <button className="flex w-32 h-auto p-3 border-2 rounded-lg gap-5 hover:bg-gray-100">
                    <p>Modified</p>
                    <ChevronDownIcon className="w-4 h-4 mt-1"/>
                </button>
            </div>
            <div className="mt-8">
                <div className="p-2 space-y-2">
                    <GridComponent cards={cardData} />
                    <GridComponent cards={cardData} />
                </div>
            </div>
        </Container>
    );
};

export default Explorer;
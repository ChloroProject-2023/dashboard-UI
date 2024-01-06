import Container from "@/components/container";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ModelData } from "../ModelData";
import Model from "@/components/models/model";
import { IModel } from "@/interfaces/IModel";
import {Link} from "react-router-dom";

const Models = () => {
  const handleEdit = (model: IModel) => {
    console.log(model);
  };

  const handleDelete = (model: IModel) => {
    console.log(model);
  };

  return (
    <Container>
      <h1 className="text-5xl font-bold">Models</h1>
      {/* FILTERS */}
      <div className="flex gap-5 mt-10">
        <button className="flex w-24 h-auto p-3 border-2 rounded-lg gap-5 hover:bg-gray-100">
          <p>Type</p>
          <ChevronDownIcon className="w-4 h-4 mt-1" />
        </button>
        <button className="flex w-32 h-auto p-3 border-2 rounded-lg gap-5 hover:bg-gray-100">
          <p>Modified</p>
          <ChevronDownIcon className="w-4 h-4 mt-1" />
        </button>
      </div>
      {/* MODELS */}
      {Array.isArray(ModelData) &&
          ModelData.map((model: IModel) => (
              <div key={model.id}>
                <Link to={`/models/${model.id}`}>
                  <Model model={model} onDelete={handleDelete} onEdit={handleEdit} />
                </Link>
              </div>
          ))}
    </Container>
  );
};

export default Models;

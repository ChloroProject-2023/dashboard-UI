import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ModelData } from "@/screens/models/ModelData.ts";
import Container from "@/components/container";
import CommentSection from "@/components/commentsection";
import {StarIcon} from "@heroicons/react/16/solid";
import {IModel} from "@/interfaces/IModel.tsx";

const ModelDetail = () => {
    const { id } = useParams();
    const model = ModelData.find((m) => m.id === parseInt(id, 10));

    if (!model) {
        return <div className="text-red-500">Model not found</div>;
    }

    return (
        <Container>
            <div className="mx-auto p-6 rounded-md">
                <div className="mb-8 pb-2 border-b border-gray-300">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{model.title}</h1>
                    <p className="text-gray-500">User: {model.user}</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Description</h2>
                    <p className="text-gray-800 leading-relaxed break-words">
                        {model.description}
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Model Details</h2>
                    <p className="text-gray-800 leading-relaxed break-words">
                        {model.details}
                    </p>
                    <div className="mt-4">
                        <p className="text-gray-500">Inferences: {model.inferences}</p>
                        <p className="text-gray-500">Ratings: {model.ratings.stars} stars</p>
                    </div>
                </div>


                {/* Star Rating */}
                <ModelDetailWithRating model={model}/>

                {/* Comment Section */}
                <CommentSection/>
            </div>
        </Container>
    );
};

const ModelDetailWithRating: React.FC<{ model: IModel }> = ({ model }) => {
    const [userRating, setUserRating] = useState<number | null>(null);

    const handleVote = (stars: number) => {
        // Update the user's rating
        setUserRating(stars);

        // Calculate new average rating
        //  ?????
    };

    return (
        <div>
            {/* Star Rating */}
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                        key={stars}
                        onClick={() => handleVote(stars)}
                        className={`mr-1 text-white-500 hover:text-yellow-600 ${
                            userRating && userRating >= stars ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                    >
                        <StarIcon className="w-6 h-6" />
                    </button>
                ))}
                {userRating && (
                    <p className="text-gray-600 mr-2">Your Rating: {userRating.toFixed(1)} Stars</p>
                )}
            </div>
        </div>
    );
};

export default ModelDetail;

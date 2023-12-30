import React from 'react';

export type CardProps = {
    modelName: string;
    author: string;
    detail: string;
    description: string;
    rating: number;
}

const CardComponent: React.FC<CardProps> = ({ modelName, author, detail, description, rating }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-2 bg-white border-2">
            <div className="font-bold text-xl mb-2">{modelName}</div>
            <p>{author}</p>
            <p>{detail}</p>
            <p>{description}</p>

            <div className="flex items-center mt-4">
                <svg className="w-5 h-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 .4l1.6 3.2c.1.2.3.4.5.4l3.5-.5c.2-.1 .4 .1 .5 .3l2.7 2.6c.1 .1 .1 .4-.1 .6L14 12c-.1 .2-.1 .4,.1,.6l3,.3c0,.2-.1,.4-.3,.5L13 17c-.2,.2-.3,.5-.2,.7l..8 3a..8a..8a..8a..8a..8a..8a..8a..8A9e9A9e9A9e9A9e9A9e9A9e9z"/></svg>
                <span className="ml-2">{rating}</span>
            </div>

        </div>

    );
};

interface GridProps {
    cards: CardProps[];
}
const GridComponent: React.FC<GridProps> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
                <CardComponent key={index} {...card} />
            ))}
        </div>
    );
};

export default GridComponent;

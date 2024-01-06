import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface Comment {
    text: string;
    ratings: {
        stars: number;
    };
}

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const handleCommentSubmit = () => {
        const newCommentObject: Comment = {
            text: newComment,
            ratings: {
                stars: 0,
            },
        };

        setComments([...comments, newCommentObject]);
        setNewComment('');
    };

    return (
        <div className="mt-8 mr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Comments</h2>
            {/* Comment Input */}
            <div className="flex items-center">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-grow p-4 border border-gray-300 rounded-md"
                />
                {/* Spacer */}
                <div className="w-4"></div>
                {/* Send Icon */}
                <PaperAirplaneIcon
                    onClick={handleCommentSubmit}
                    className="w-6 h-6 cursor-point hover:text-blue-500"
                />
            </div>
            {/* Display Comments */}
            {comments.map((comment, index) => (
                <div key={index} className="border-t border-gray-300 mt-4 pt-4">
                    <p className="text-gray-600 mb-2">{comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;

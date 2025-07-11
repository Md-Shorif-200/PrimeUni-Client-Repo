
import React from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const Ratings = ({value}) => {
    return (
    <div className="flex items-center gap-2">
      <Rating
        initialRating={value}
        readonly
        emptySymbol={<AiOutlineStar className="text-yellow-500 text-xl" />}
        fullSymbol={<AiFillStar className="text-yellow-500 text-xl" />}
      />
      <span className="text-gray-700 text-sm">({value})</span>
    </div>
    );
};

export default Ratings;
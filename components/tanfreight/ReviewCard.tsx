import Image from 'next/image';
import React from 'react';
interface ReviewProps {
  customerName: string;
  imgURL: string;
  rating: number;
  feedback: string;
}
const ReviewCard = ({
  customerName,
  imgURL,
  rating,
  feedback,
}: ReviewProps) => {
  return (
    <div className="flex flex-col items-center justify-center scroll-smooth rounded-md bg-slate-100 p-8 shadow-lg">
      <Image
        src={imgURL}
        width={70}
        height={70}
        alt=""
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-2 flex items-center justify-center gap-2">
        <Image
          className="m-0 object-contain"
          src="/freight/star.svg"
          width={24}
          height={24}
          alt="customer review star"
        />
        <p className="text-lg text-slate-600">({rating})</p>
      </div>
      <h3 className="mt-1 text-center text-2xl font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;

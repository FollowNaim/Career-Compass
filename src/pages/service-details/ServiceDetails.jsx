import Comments from "@/components/feedback/Comments";
import FeedBack from "@/components/feedback/FeedBack";
import DetailsCard from "@/components/services-details/DetailsCard";
import SmallCards from "@/components/small-cards/SmallCards";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function ServiceDetails() {
  const [cards, setCards] = useState([]);
  const { found, data } = useLoaderData();

  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <DetailsCard data={found} />
            <Comments />
            <FeedBack />
          </div>
          <div className="col-span-3 flex flex-col gap-3 sticky top-0 h-fit">
            {[...data].slice(0, 6).map((card) => (
              <SmallCards key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
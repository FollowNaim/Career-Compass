import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "../ui/card";

function SmallCards({ card }) {
  const {
    id,
    service_name,
    category,
    price,
    duration,
    counselor,
    rating,
    brief_description,
    long_description,
    image,
    platform,
    skill_focus,
    availability,
  } = card || {};
  return (
    <Card>
      <Link to={`/service/${id}`}>
        <CardHeader className="flex flex-row items-center gap-3">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src={image}
            alt=""
          />
          <CardTitle className="text-lg">{service_name}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default SmallCards;

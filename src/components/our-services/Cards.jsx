import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

function Cards() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {[...services].slice(0, 6).map((service) => (
        <SingleCard key={service.id} service={service} />
      ))}
    </div>
  );
}

export default Cards;

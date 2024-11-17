import DetailsCard from "@/components/services-details/DetailsCard";
import { useLoaderData } from "react-router-dom";

function ServiceDetails() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <DetailsCard data={data} />
          </div>
          <div className="col-span-3">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;

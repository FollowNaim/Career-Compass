import { Button } from "@/components/ui/button";

function Slider({ title, bold, desc, imgUrl, btnText, btnIcon }) {
  return (
    <div className="">
      <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center pl-4 pb-10 md:pb-0 md:pl-8 my-8 gap-4 bg-muted">
        <div className="col-span-1 flex flex-col gap-4 items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight font-extrabold">
            {title} <br /> <span className=" text-blue-600">{bold}</span>
          </h2>
          <p className="text-lg text-secondary-foreground">{desc}</p>
          <div className="mt-4 flex items-center gap-4">
            <Button className="bg-primary ">
              {btnIcon} {btnText}
            </Button>
            <Button className="bg-muted" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="col-span-1 order-first md:order-last">
          <img
            className="w-full h-72 object-top object-cover md:object-center  md:h-auto md:w-4/5 ml-auto"
            src={imgUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;

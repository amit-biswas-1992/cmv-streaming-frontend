import Link from "next/Link";
import CardTeaser from "./CardTeaser";
import CardData from "./CardData";

const Teaser = () => {
  return (
    <div className="pt-6">
      <div className="flex justify-between items-center ml-4 whitespace-nowrap mt-4">
        <Link href="/Teaser">
          <h1 className="text-xl font-bold text-white cursor-pointer">
            Teaser
          </h1>
        </Link>
        <button>
          <p className=" text-white font-thin mr-4">View all</p>
        </button>
      </div>
      <div className="">
        <CardTeaser details={CardData} />
      </div>
    </div>
  );
};

export default Teaser;

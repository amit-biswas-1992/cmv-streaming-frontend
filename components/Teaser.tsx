import Link from "next/link";
import CardTeaser from "./CardTeaser";
import CardData3 from "./CardData3";

const Teaser = () => {
  return (
    <div className="pt-6">
      <div className="flex justify-between items-center ml-4 whitespace-nowrap mt-4">
        <Link href="teaser">
          <h1 className="text-xl font-bold text-white cursor-pointer">
            Teaser
          </h1>
        </Link>
        <Link href='viewAll'>
        <button>
          <p className=" text-white font-thin mr-4">View all</p>
        </button>
        </Link>
      </div>
      <div className="">
        <CardTeaser details={CardData3} />
      </div>
    </div>
  );
};

export default Teaser;

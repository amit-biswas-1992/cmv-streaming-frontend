import Link from "next/Link";
import CardTeaser from "./CardTeaser";
import CardData from "./CardData";

const Teaser = () => {
  return (
    <div className="pt-6">
      <div className="grid grid-cols-2 justify-between items-center ml-4 whitespace-nowrap mt-4">
        <Link href="/Teaser">
          <h1 className="text-xl font-bold text-white">Teaser</h1>
        </Link>
        <Link href="/Teaser">
          <p className=" text-white font-thin ml-auto mr-8">View all</p>
        </Link>
      </div>
      <div className="pb-20">
        <CardTeaser details={CardData} />
      </div>
    </div>
  );
};

export default Teaser;


import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  

  return {
    props: {
      data,
    },
  };
}; 

const content = ({ data }) => {
  console.log('data is showing',data)
  return (
    <>
      
      {data.map((curElem) => {
        return (
          <div key={curElem.id} className="bg-blue-200 flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4 text-white">
            <h3>{curElem.id}</h3>
            <Link href={`/content/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default content;
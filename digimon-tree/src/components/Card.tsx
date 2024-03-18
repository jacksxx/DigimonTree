import React from "react";
import Image from "next/image";

const Card = (props: any, w:any , h:any) => {
  return (
    <div className="m-2 rounded-lg border-[1px] border-black shadow-sm shadow-black ">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          alt={props.title}
          src={props.image}
          width={w}
          height={h}
          className="h-full w-full"
        />
      </div>
      <div className="m-2 flex flex-col">
        <h1 className="">{props.title}</h1>
        <h2 className="">{props.description}</h2>
      </div>
    </div>
  );
};

export default Card;

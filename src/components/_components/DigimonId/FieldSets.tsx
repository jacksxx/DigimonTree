import React from "react";
import Image from "next/image";

type fieldsets = {
  field: string[];
  fimg: string;
};

const FieldSets = (f: fieldsets) => {
  return (
    <>
      <Image
        alt={f.field.join("")}
        src={f.fimg}
        width={35}
        height={35}
        title={f.field.join(" ")}
        quality={100}
        priority
        style={{
          minHeight: "10%",
          width: "10%",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="shadow-md shadow-black"
      />
    </>
  );
};

export default FieldSets;

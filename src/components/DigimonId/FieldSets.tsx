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
        width={50}
        height={50}
        priority
        title={f.field.join(" ")}
      />
    </>
  );
};

export default FieldSets;

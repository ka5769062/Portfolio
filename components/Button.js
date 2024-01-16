import React from "react";
import Image from "next/image";
import { button } from "@mui/joy";

function Button({ type, title, icon, variant }) {
  return (
    <button
      className={`flex-center gap-4 rounded-full border ${variant}`}
      type={type}
    >
     <div className="flex space-x-1">
      <label className="font-[500] whitespace-nowrap cursor-pointer ">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
      </div>
   </button>
  );
}

export default Button;

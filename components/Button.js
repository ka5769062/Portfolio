import React from "react";
import Image from "next/image";

function Button({ type, title, icon, variant }) {
  return (
    <button
      className={`flex-center gap-2 rounded-full border ${variant}`}
      type={type}
    >
      <label className="font-[500] whitespace-nowrap cursor-pointer ">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </button>
  );
}

export default Button;

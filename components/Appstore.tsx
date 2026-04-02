import Image from "next/image";
import React from "react";

interface AppStore {
  classname?: string;
}

export default function Appstore({ classname }: AppStore) {
  return (
    <div className={`flex gap-14 ${classname || ""} `}>
      <a href="https://apps.apple.com/ng/app/RoutePay-fintech/id6502836208">
        <Image
          width={500}
          height={500}
          src="/images/app-1.svg"
          alt="App store"
          className="w-[110] md:w-fit"
        />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.routepay&hl=en">
        <Image
          width={500}
          height={500}
          src="/images/play-1.svg"
          alt="Play store"
          className="w-[110] md:w-fit"
        />
      </a>
    </div>
  );
}

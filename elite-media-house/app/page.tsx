import Image from "next/image";
import ConstructionIcon from "./ConstructionIcon";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start h-dvh lg:px-24 px-4 py-4 bg-[#00B3D1]">
      <Image
        alt="logo"
        width={147}
        height={147}
        src={"/EMH logo 2.png"}
        className="mx-auto lg:mx-0"
      />
      <div className="flex lg:justify-between justify-start lg:pt-8 pt-2  lg:mt-0 items-start flex-wrap-reverse lg:mx-0 mx-auto w-full mb-50">
        <div className="flex flex-col items-start gap-2 lg:w-2/3 w-full pb-2 lg:pb-0 mx-auto lg:mx-0">
          <div className="lg:text-7xl font-serif font-bold text-2xl lg:text-left text-center w-full ">
            Our New Advertising Services Website Is Coming Soon
          </div>
          <div className="lg:text-4xl font-semibold text-base lg:text-left text-center m-auto lg:m-0 w-full">
            Made By Elites For Elites
          </div>
        </div>
        <div className="px-20 lg:px-0 mx-auto lg:mx-0 lg:w-96 w-full flex items-center justify-center">
          <ConstructionIcon />
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-3 pb-8 mt-auto">
        <div className="flex-grow"></div>
        <div className="lg:text-[32px] font-medium text-base text-center">
          Work with us
        </div>
        <div className="lg:flex hidden gap-6">
          <Link
            href={
              "https://www.instagram.com/elite_media_house?igsh=M2ZtdGEyOW0yMzg3"
            }
          >
            <Image
              width={70}
              alt="insta"
              height={70}
              src={"/instagram_4494488 1.png"}
            />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/company/elite-media-house/about/?viewAsMember=true"
            }
          >
            <Image width={70} alt="insta" height={70} src={"/145807 1.png"} />
          </Link>
        </div>
        <div className="flex lg:hidden gap-6">
          <Link
            href={
              "https://www.instagram.com/elite_media_house?igsh=M2ZtdGEyOW0yMzg3"
            }
          >
            <Image
              width={55}
              alt="insta"
              height={55}
              src={"/instagram_4494488 1.png"}
            />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/company/elite-media-house/about/?viewAsMember=true"
            }
          >
            <Image width={55} alt="insta" height={55} src={"/145807 1.png"} />
          </Link>
        </div>
      </div>
    </main>
  );
}

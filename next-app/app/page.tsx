import Image from "next/image";
// using the @ we go to the root of our application.
import coffee from "@/public/images/coffee.jpg";

export default async function Home() {
  return (
    <main>
      {/* show local images */}
      <Image src={coffee} alt="Coffee" priority />
      {/* show remote images  */}
      {/* 
        with remote images, we should always provide a dimension because next.js doesn't know their size ahead of time.
        with local images, next.js automatically detects their size so we don't have to specify a width and a height.
      */}
      <div className="relative h-screen">
        {/* 
        In the console, we get a warning saying an image with source has fill, but the parent element has an invalid static position. The parent must have a position of relative, absolute, or fixed. By default, the main element is static, causing this warning. To fix it, set the parent’s class to relative, absolute, or fixed.

        We may also see a warning about the image having a fill but a height of zero. This happens because the parent element lacks a height. To fix this, set a height, like h-screen, for full viewport height. For cards, set an appropriate height for the parent. */}
        <Image
          src="https://bit.ly/react-cover"
          alt="react logo"
          // width={300}
          // height={170}
          // to make our image responsive, instead of width and height, we should set fill which is a boolean
          // fill={true}
          // or shorter syntax
          fill
          // fix aspect ratio we can using style
          // style={{ objectFit: "cover" }}
          // style={{ objectFit: "contain" }}
          // but better solution is to use tailwind instead of inline style
          className="object-cover"
          //sizes="100vw" // this determines how much the width of view port, the image is going to take. we often use it with fill.
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" // we can determines sizes base on devices width and break points
          quality={100} // value is 0 -100 and we mostly use 75 but for background if you want higher quality you can use 100
          priority // Priority which is a boolean and this is for images that should appear above the fold. Because by default, this image component uses lazy loading. So our images are only retrieved when they are visible in the viewport. So if you have other images below this, they're not downloaded unless we see them. Okay, but if you have images that should be visible right from the get-go, then we should set priority here.
        />
      </div>
    </main>
  );
}

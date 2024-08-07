import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-0-none">
      <Image
        src={"/GK_1.png"}
        alt="Picture"
        width={500}
        height={500}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;

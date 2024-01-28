import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-0-none">
      <Image
        src={"/GK_.png"}
        alt="Picture"
        width={600}
        height={500}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;

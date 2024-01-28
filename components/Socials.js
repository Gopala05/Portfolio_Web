import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


const Socials = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <button onClick={() => openInNewTab("https://github.com/Gopala05")} className="hover:text-accent transition-all duration-300">
        <BsGithub />
      </button>
      <button onClick={() => openInNewTab("https://www.instagram.com/call__me__gk/")} className="hover:text-accent transition-all duration-300">
        <BsInstagram />
      </button>
      {/* <button onClick={() => openInNewTab("https://www.facebook.com/")} className="hover:text-accent transition-all duration-300">
        <BsFacebook />
      </button> */}
      <button onClick={() => openInNewTab("https://www.linkedin.com/in/gopala-krishna-v-9693b022b/?originalSubdomain=in")} className="hover:text-accent transition-all duration-300">
        <BsLinkedin />
      </button>
    </div>
  );
};


export default Socials;

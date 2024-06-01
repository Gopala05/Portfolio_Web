import { BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";

const Socials = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  function openGmail(recipient) {
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  }

  function openCall(phoneNumber) {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  }

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <button
        onClick={() => openInNewTab("https://github.com/Gopala05")}
        className="hover:text-accent transition-all duration-300"
      >
        <BsGithub />
      </button>
      <button
        onClick={() => openInNewTab("https://www.instagram.com/call__me__gk/")}
        className="hover:text-accent transition-all duration-300"
      >
        <BsInstagram />
      </button>
      {/* <button onClick={() => openInNewTab("https://www.facebook.com/")} className="hover:text-accent transition-all duration-300">
        <BsFacebook />
      </button> */}
      <button
        onClick={() =>
          openInNewTab(
            "https://www.linkedin.com/in/gopala-krishna-v-9693b022b/?originalSubdomain=in"
          )
        }
        className="hover:text-accent transition-all duration-300"
      >
        <BsLinkedin />
      </button>
      <button
        onClick={() => openGmail("gopigopala05vkbrg@gmail.com")}
        className="hover:text-accent transition-all duration-300"
      >
        <BsGoogle />
      </button>
      <button
        onClick={() => openCall(6360318731)}
        className="hover:text-accent transition-all duration-300"
      >
        <BsTelephone />
      </button>
    </div>
  );
};

export default Socials;

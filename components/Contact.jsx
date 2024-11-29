// icon
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.status === 200) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };
  return (
    <div className="h-full bg-primary/30 px-5 w-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="text-6xl text-center mb-12 font-bold">
            Let&apos;s <span className="text-red-600">connect.</span>
          </h2>
          {/* form */}
          <form
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="name"
                className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light "
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email"
                className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light "
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="message"
              className="w-full h-[180px] p-6  rounded-lg resize-none bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
            ></textarea>
            <button
              type="submit"
              className="h-[52px] rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-600 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            {status && <p>{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


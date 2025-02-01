import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { BsArrowRight } from "react-icons/bs";

const Contact = ({ contact }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to the API endpoint
      const res = await axios.post("/api/send-email", data);

      if (res.status === 200) {
        // Show success toast
        toast.success("Message sent successfully!");
        reset(); // Reset the form fields
      } else {
        // Show error toast
        toast.error(res.data.message || "Something went wrong.");
      }
    } catch (error) {
      // Show error toast
      toast.error("Error sending message.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full bg-[#121212] px-5 w-full" ref={contact}>
      <div className="container mx-auto sm:py-32 py-10 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="xl:text-6xl md:text-5xl text-4xl text-center mb-12 font-bold">
            Let&apos;s <span className="text-red-600">connect.</span>
          </h2>
          {/* form */}
          <form
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="name"
                className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="email"
                className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              placeholder="subject"
              className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
            />
            {errors.subject && (
              <p className="text-red-600 text-sm">{errors.subject.message}</p>
            )}
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="message"
              className="w-full h-[180px] p-6 rounded-lg resize-none bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message.message}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-[52px] rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-600 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isSubmitting ? "Sending..." : "Let's talk"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

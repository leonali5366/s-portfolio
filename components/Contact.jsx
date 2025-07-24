import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { BsArrowRight } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Contact = ({ contact }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/send-email", data);
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(res.data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Error sending message.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full bg-[#121212] px-5 w-full" ref={contact}>
      <div className="container mx-auto sm:py-32 py-10 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="xl:text-6xl md:text-5xl text-4xl text-center mb-12 font-bold">
            Let&apos;s <span className="text-red-600">connect.</span>
          </h2>
          <form
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-x-6 w-full">
              <div className="w-full">
                <label htmlFor="name" className="block text-left mb-2 text-white/80">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your name"
                  className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm text-left">{errors.name.message}</p>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-left mb-2 text-white/80">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Your email"
                  className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm text-left">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-left mb-2 text-white/80">
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject of your message"
                className="w-full h-[52px] rounded-lg pl-6 bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
              />
              {errors.subject && (
                <p className="text-red-600 text-sm text-left">{errors.subject.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-left mb-2 text-white/80">
                Do you want to redesign an existing website? *
              </label>
              <Controller
                name="redesign"
                control={control}
                rules={{ required: "This selection is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-white/20">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-black text-white">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.redesign && (
                <p className="text-red-600 text-sm text-left">{errors.redesign.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-left mb-2 text-white/80">
                Any Figma design, ready design or competitor URL for reference? *
              </label>
              <Controller
                name="reference"
                control={control}
                rules={{ required: "This selection is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-white/20">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-black text-white">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.reference && (
                <p className="text-red-600 text-sm text-left">{errors.reference.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-left mb-2 text-white/80">
                Message *
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                placeholder="Your message"
                className="w-full h-[180px] p-6 rounded-lg resize-none bg-transparent outline-none focus:ring-1 focus:ring-red-600 border border-white/20 placeholder:text-white/30 placeholder:font-light"
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-sm text-left">{errors.message.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-[52px] rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-600 group mt-4"
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
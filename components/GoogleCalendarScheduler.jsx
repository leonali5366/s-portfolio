import { useEffect } from "react";
import Head from "next/head";

const GoogleCalendarScheduler = ({ children }) => {
  // URL for Google Calendar scheduling
  const calendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jlsd2MUFQ-S9uwj0Y0KIRKp2hx7i9hzXpQOlhjWcWqZ8H1tzAqk3NLJEmofRThvJXdU1MER9J?gv=true";

  // Client-side effect to initialize the calendar button once the component is mounted
  useEffect(() => {
    // Ensure the script is executed only on the client-side
    if (typeof window !== "undefined") {
      // Wait until the page is fully loaded before initializing the calendar button
      window.addEventListener("load", () => {
        const target = document.getElementById(
          "google-calendar-scheduler-button"
        );
        if (target) {
          // This assumes the external `calendar` object is available after the script loads
          calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jlsd2MUFQ-S9uwj0Y0KIRKp2hx7i9hzXpQOlhjWcWqZ8H1tzAqk3NLJEmofRThvJXdU1MER9J?gv=true",
            color: "#039BE5",
            label: "Book an appointment",
            target,
          });
        }
      });

      return () => {
        window.removeEventListener("load", () => {});
      };
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  // Function to programmatically open the calendar scheduling URL
  const openCalendarScheduling = () => {
    window.open(calendarUrl, "_blank", "width=800,height=600");
  };

  return (
    <div>
      {/* Injecting external CSS and JS using Next.js Head component */}
      <Head>
        {/* Google Calendar scheduling button CSS */}
        <link
          href="https://calendar.google.com/calendar/scheduling-button-script.css"
          rel="stylesheet"
        />
        {/* Google Calendar scheduling button JS */}
        <script
          src="https://calendar.google.com/calendar/scheduling-button-script.js"
          async
        ></script>
      </Head>

      <div onClick={openCalendarScheduling}>
        {/* Trigger the calendar scheduling page directly using a custom button */}
        {children}
      </div>

      {/* The target div where the Google Calendar button will be rendered */}
      <div
        id="google-calendar-scheduler-button"
        style={{ display: "inline-block" }}
      ></div>
    </div>
  );
};

export default GoogleCalendarScheduler;

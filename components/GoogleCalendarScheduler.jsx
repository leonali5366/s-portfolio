"use client";

import { useEffect } from "react";
import Head from "next/head";
import { event } from "../lib/fbpixel"; // ✅ import Pixel helper

const GoogleCalendarScheduler = ({ children }) => {
  // URL for Google Calendar scheduling
  const calendarUrl =
    "https://calendar.app.google/F1oikVbKZuvg5qCP7";

  // Client-side effect to initialize the calendar button once the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        const target = document.getElementById(
          "google-calendar-scheduler-button"
        );
        if (target && typeof calendar !== "undefined") {
          calendar.schedulingButton.load({
            url: calendarUrl,
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
  }, []);

  // Function to programmatically open the calendar scheduling URL
  const openCalendarScheduling = () => {
    // ✅ Fire Facebook Pixel "Schedule" event
    event("Schedule", {
      content_name: "Google Calendar Appointment",
      method: "Google Meet",
    });

    // ✅ Then open the popup
    window.open(calendarUrl, "_blank", "width=800,height=600");
  };

  return (
    <div>
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

      {/* ✅ Click wrapper triggers Pixel + popup */}
      <div onClick={openCalendarScheduling}>{children}</div>

      {/* Google Calendar renders its own button here (optional) */}
      <div
        id="google-calendar-scheduler-button"
        style={{ display: "inline-block" }}
      ></div>
    </div>
  );
};

export default GoogleCalendarScheduler;

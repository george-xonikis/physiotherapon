"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          maxLength={100}
          className="h-11 px-3 text-sm border border-gray-300 focus:border-[#1977cc] focus:outline-none w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          maxLength={100}
          className="h-11 px-3 text-sm border border-gray-300 focus:border-[#1977cc] focus:outline-none w-full"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        maxLength={200}
        className="mt-4 h-11 px-3 text-sm border border-gray-300 focus:border-[#1977cc] focus:outline-none w-full"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Message"
        required
        maxLength={5000}
        className="mt-4 px-3 py-2.5 text-sm border border-gray-300 focus:border-[#1977cc] focus:outline-none w-full"
      />

      <div className="my-3">
        {status === "error" && (
          <div className="bg-[#ed3c0d] text-white text-left p-4 font-semibold">
            {errorMsg}
          </div>
        )}
        {status === "success" && (
          <div className="bg-[#18d26e] text-white text-center p-4 font-semibold">
            Your message has been sent. Thank you!
          </div>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-oil text-white border-0 px-9 py-2.5 rounded-full transition-colors duration-400 hover:bg-oil-hover disabled:opacity-70 inline-flex items-center gap-2"
        >
          Send Message
          {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        </button>
      </div>
    </form>
  );
}

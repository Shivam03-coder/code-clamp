"use client";

import React, { useState } from "react";

const SendMail = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async () => {
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "Subscription Confirmed",
          text: "Thank you for subscribing to our updates!",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="mt-20">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[1px]">
        <div className="rounded-xl bg-black p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex-1">
              <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Subscribe to get the latest updates, news and component releases.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Subscribe"}
                </button>
              </div>
              {status === "success" && (
                <p className="mt-2 text-sm text-green-400">Subscription successful!</p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-400">Something went wrong. Try again.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;

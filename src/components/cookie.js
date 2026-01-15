"use client";
import { useState } from "react";

export default function CookiePopup() {
  const [show, setShow] = useState(true);

  if (!show) return null; // hide popup when dismissed

  return (
    <div className="cookie-popup">
      <p>
        We use cookies to enhance your browsing experience. By continuing, you agree to our use of cookies.
      </p>
      <button className="cookie-button" onClick={() => setShow(false)}>
        Got it!
      </button>
    </div>
  );
}

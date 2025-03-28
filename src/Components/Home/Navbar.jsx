import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setVisible(false); // Hide when scrolling down
      } else {
        setVisible(true); // Show when scrolling up
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full z-50 bg-gradient-to-r from-[rgb(182,9,182)] to-[rgb(4,80,221)] shadow-md transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center text-white">
          <h1 className="text-center text-lg">
            🌍 Real-Time Weather Updates, Anytime, Anywhere!
          </h1>
        </div>
      </div>
    </Disclosure>
  );
}

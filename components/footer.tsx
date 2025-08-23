import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-between items-center">
      <div className="h-[15rem] flex items-center justify-center">
        <TextHoverEffect text="EKILIE" />
      </div>
      <h5 className="font-medium bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
        #InnovatingTheFuture
      </h5>

      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">
          © 2025 Ekilie. Pioneering digital innovation.
        </p>
        <p className="text-xs text-muted-foreground">
          Shaping tomorrow&apos;s technology today.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

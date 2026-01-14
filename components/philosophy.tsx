"use client";

import { Box, Lock, Search, Settings, Sparkles, Globe } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ColourfulText from "@/components/ui/colourful-text";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4">
      <h1 className="text-2xl mb-6 md:text-5xl lg:text-7xl font-bold text-center relative z-2 font-sans">
        Our <ColourfulText text="Remote-First" /> Philosophy <br />
      </h1>
    <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Globe className="h-4 w-4  dark:text-neutral-400" />}
            title="100% Remote, Always"
            description="We believe the best talent exists everywhere. Our fully distributed team works from locations around the world, bringing diverse perspectives to every project."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4  dark:text-neutral-400" />}
            title="Async-First Communication"
            description="We embrace asynchronous workflows that respect time zones and deep work. Clear documentation and thoughtful communication are our foundation."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Box className="h-4 w-4  dark:text-neutral-400" />}
            title="Engineering Excellence"
            description="Remote doesn't mean compromise. We deliver robust, scalable solutions built with precision—transforming complex challenges into elegant systems."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4  dark:text-neutral-400" />}
            title="Work-Life Balance"
            description="Freedom to work from anywhere means our developers are happier, healthier, and more productive. We prioritize well-being alongside delivery."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Lock className="h-4 w-4  dark:text-neutral-400" />}
            title="Trust & Transparency"
            description="Our remote culture is built on trust. We value results over hours, transparency over surveillance, and autonomy over micromanagement."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance  md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem]  md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

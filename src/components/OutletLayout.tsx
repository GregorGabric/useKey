import type { FC } from "react";

interface OutletLayoutProps {
  colorClass: string;
  text: string;
}

const OutletLayout: FC<OutletLayoutProps> = ({ colorClass, text }) => {
  return (
    <main className={`grid place-items-center grow-[3] p-10 ${colorClass}`}>
      <h1 className="text-9xl">{text}</h1>
    </main>
  );
};
export default OutletLayout;

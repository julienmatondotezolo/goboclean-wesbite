import { CtaBand, Emergency, Figures, Hero, Sectors, Services, Why } from "@/components";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Figures />
      <Services />
      <Sectors more />
      <Why />
      <Emergency more />
      <CtaBand />
    </>
  );
}

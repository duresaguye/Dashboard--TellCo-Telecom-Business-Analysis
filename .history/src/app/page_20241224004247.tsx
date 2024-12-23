import TelcomAnalysis from "@/components/Dashboard/TelcomAnalysis";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Telcom data analysis",
  description: "",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <TelcomAnalysis />
      </DefaultLayout>
    </>
  );
}

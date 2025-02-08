"use client";

import { Button } from "./ui/button";

export default function DownloadPDF() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV of Mohammad Rana Arju.pdf"; 
    link.download = "CV of Mohammad Rana Arju.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-10 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase border border-primary"
      onClick={handleDownload}
    >
      Resume
    </Button>
  );
}

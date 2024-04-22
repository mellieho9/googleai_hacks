"use client";
import PaperViewPanel from "@/components/pdfViewer/PaperViewPanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-gray-50 flex flex-col items-center overflow-y-hidden overscroll-none text-white text-xs">
      <PaperViewPanel />
      {children}
    </div>
  );
}

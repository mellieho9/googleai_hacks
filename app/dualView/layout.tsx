import { BackButton } from "@/components/BackButton";
import { DiagramView } from "@/components/dual_view/DiagramView";
import { PaperView } from "@/components/dual_view/PaperView";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <span className="absolute top-5 left-6 z-50">
        <BackButton />
      </span>
      <div className="w-full flex flex-row z-0">
        {/* paper view */}
        <div className="w-1/2">
          <PaperView />
        </div>
        {/* diagram view */}
        <div className="w-1/2">
          <DiagramView />
        </div>
      </div>
    </div>
  );
}

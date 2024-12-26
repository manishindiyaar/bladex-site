import { ChevronRight } from "lucide-react"; // Make sure to import the ChevronRight icon

interface AnnouncementBannerProps {
  message: string; // Define the type for the message prop
}

export default function AnnouncementBanner({ message }: AnnouncementBannerProps) {
  return (
    <div className="w-full flex justify-center py-0">
      <div className="group cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow duration-300">
        <span className="text-sm font-semibold text-gray-700">
          {message} {/* Use the message prop here */}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:translate-x-0.5 transition-transform duration-300" />
      </div>
    </div>
  );
}
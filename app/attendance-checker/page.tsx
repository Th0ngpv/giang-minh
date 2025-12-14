// app/attendance-checker/page.tsx
import AttendanceChecker from "@/app/attendance-checker/AttendanceCheckerClient";

export const metadata = {
  title: "Xác Nhận Tham Dự | Giang & Minh",
  description: "Xem tổng số khách mời tham dự lễ cưới của Giang & Minh",
  openGraph: {
    title: "Xác Nhận Tham Dự | Giang & Minh",
    description: "Xem tổng số khách mời tham dự lễ cưới của Giang & Minh",
    url: "https://giang-minh.vercel.app/attendance-checker",
    siteName: "Giang & Minh",
    images: [
      {
        url: "https://giang-minh.vercel.app/images/attendance-checker.webp",
        width: 800,
        height: 600,
        alt: "Attendance Checker",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xác Nhận Tham Dự | Giang & Minh",
    description: "Xem tổng số khách mời tham dự lễ cưới của Giang & Minh",
    images: ["https://giang-minh.vercel.app/images/attendance-checker.webp"],
  },
};

export default function AttendancePage() {
  return <AttendanceChecker />;
}

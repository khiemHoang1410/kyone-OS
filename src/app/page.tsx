import { ProfileHeader } from "@/components/dashboard/ProfileHeader";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Khu vực tiêu đề trang */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-zinc-400">Overview of my personal workspace.</p>
      </div>

      {/* Import cái thẻ Profile vào đây */}
      <ProfileHeader />
      
      {/* Sau này sẽ thêm các widget khác ở dưới này */}
    </div>
  );
}
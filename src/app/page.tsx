import { ProfileHeader } from "@/components/dashboard/ProfileHeader";
import { TechStack } from "@/components/dashboard/TechStack";
  
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

      <div>
        <h3 className="text-xl font-semibold mb-4 text-zinc-100">My Arsenal 🛠️</h3>
        <TechStack />  {/* <--- Lắp component vào đây */}
      </div>
    </div>
  );
}
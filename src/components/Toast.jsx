import { useAuth } from "../context/AuthContext";

export default function Toast() {
  const { toast, isToastVisible } = useAuth(); // ← CAMBIO

  if (!isToastVisible) return null; // ← CAMBIO

  const getToastStyle = () => {
    if (toast.includes("✅") || toast.includes("Bienvenido")) {
      return "bg-green-100 text-green-700 border-green-300";
    }
    if (toast.includes("❌") || toast.includes("Error")) {
      return "bg-red-100 text-red-700 border-red-300";
    }
    if (toast.includes("👋")) {
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    }
    return "bg-purple-100 text-purple-700 border-purple-300";
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-fadeIn">
      <div
        className={`px-4 py-2 rounded-xl border shadow-lg font-medium ${getToastStyle()}`}
      >
        {toast}
      </div>
    </div>
  );
}
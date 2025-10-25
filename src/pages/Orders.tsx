import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const ORDERS = [
  {
    id: 1,
    name: "Minimal Stand",
    status: "Track Order",
    statusColor: "text-primary",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
    trackingId: "1893-1",
  },
  {
    id: 2,
    name: "Kassel Wine Rack / Bottle Holder",
    status: "Delivered 26-Nov-2021",
    statusColor: "text-muted-foreground",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Baldwin Wall Mounted Study Table",
    status: "Delivered 11-Feb-2021",
    statusColor: "text-muted-foreground",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Twain Study Table",
    status: "Delivered 10-Jan-2021",
    statusColor: "text-muted-foreground",
    image: "https://images.unsplash.com/photo-1595428774638-7f3cbb518e3f?w=200&h=200&fit=crop",
  },
];

export default function Orders() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="My Orders" cartCount={3} />

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {ORDERS.map((order) => (
            <button
              key={order.id}
              onClick={() =>
                order.trackingId && navigate(`/tracking/${order.trackingId}`)
              }
              className="w-full flex gap-4 bg-card rounded-2xl p-4 items-center hover:bg-muted/50 transition-colors"
            >
              <div className="w-24 h-24 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h3 className="font-semibold mb-2 line-clamp-2">{order.name}</h3>
                <span className={`text-sm font-medium ${order.statusColor}`}>
                  {order.status}
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

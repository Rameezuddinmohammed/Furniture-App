import { useState } from "react";
import { Plus, Minus, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-6">
        <Header title="My Cart" cartCount={0} />
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Add some products to get started!
          </p>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      <Header title="My Cart" cartCount={totalItems} />

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 bg-card rounded-2xl p-4 relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveItem(item.id, item.name)}
                className="absolute top-2 right-2 h-8 w-8 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="w-24 h-24 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 pr-8">
                <h3 className="font-semibold mb-2 line-clamp-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-price">
                    Rs {item.price.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="h-8 w-8 rounded-full"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold min-w-[2rem] text-center">
                      {item.quantity.toString().padStart(2, "0")}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="h-8 w-8 rounded-full"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {/* Promo Code */}
          <div className="relative">
            <Input
              placeholder="Enter your promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="pr-12 rounded-xl"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1 h-9 w-9 rounded-lg"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between text-lg">
            <span className="font-medium">Total:</span>
            <span className="font-bold text-2xl">
              Rs {totalPrice.toLocaleString()}
            </span>
          </div>

          {/* Checkout Button */}
          <Button
            size="lg"
            className="w-full"
            onClick={() => navigate("/checkout")}
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
}

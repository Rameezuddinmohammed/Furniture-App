import { Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const { totalItems, totalPrice, clearCart } = useCart();

  const deliveryFee = 500;
  const total = totalPrice + deliveryFee;

  const handleSubmitOrder = () => {
    clearCart();
    navigate("/success");
  };

  if (totalItems === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      <Header title="Check-Out" cartCount={totalItems} />

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Shipping Address */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">Shipping Address</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="bg-card rounded-2xl p-4 space-y-2">
            <h3 className="font-semibold">Bruno Fernandes</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              25 rue Robert Latouche, Nice, 06200, Côte D'azur, France
            </p>
          </div>
        </div>

        {/* Payment */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">Payment</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="bg-card rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-badge opacity-70"></div>
                </div>
              </div>
              <span className="font-medium">**** **** **** 3947</span>
            </div>
          </div>
        </div>

        {/* Delivery Method */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">Delivery method</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="bg-card rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/DHL_Logo.svg/200px-DHL_Logo.svg.png"
                alt="DHL"
                className="h-8 object-contain"
              />
              <span className="font-medium">Fast (2-3days)</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Order Summary */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Order:</span>
            <span className="font-semibold">Rs {totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Delivery:</span>
            <span className="font-semibold">Rs {deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-lg">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-xl">Rs {total.toLocaleString()}</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button size="lg" className="w-full" onClick={handleSubmitOrder}>
          Submit Order
        </Button>
      </div>
    </div>
  );
}

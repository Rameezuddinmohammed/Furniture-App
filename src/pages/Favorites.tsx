import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { PRODUCTS } from "@/data/products";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const { favorites } = useFavorites();

  const favoriteProducts = PRODUCTS.filter((p) => favorites.has(p.id));

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <Header title="Favourite" cartCount={totalItems} />
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">No favorites yet</h2>
          <p className="text-muted-foreground mb-6">
            Start adding products to your wishlist!
          </p>
          <Button onClick={() => navigate("/")}>Browse Products</Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Favourite" cartCount={totalItems} />

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="flex gap-4 bg-card rounded-2xl p-4 items-center"
            >
              <div className="w-24 h-24 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <span className="font-bold text-price">
                  Rs {product.price.toLocaleString()}
                </span>
              </div>
              <Button
                size="icon"
                className="flex-shrink-0 h-10 w-10 rounded-xl"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

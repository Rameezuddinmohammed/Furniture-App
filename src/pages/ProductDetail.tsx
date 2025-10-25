import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, Minus, Heart, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { PRODUCTS } from "@/data/products";
import { toast } from "sonner";

const PRODUCT = {
  id: "1",
  name: "Minimal Stand",
  price: 2343,
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
  rating: 4.6,
  reviews: 86,
  shop: {
    name: "Shop Larson Electronic",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const REVIEWS = [
  {
    id: 1,
    name: "Yelena Belova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 4,
    date: "2 Minggu yang lalu",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    id: 2,
    name: "Stephen Strange",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 3,
    date: "1 Bulan yang lalu",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const FEATURED = [
  {
    id: "2",
    name: "Minimal Stand",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 86,
  },
  {
    id: "3",
    name: "Minimal Stand",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 86,
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 2);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} item(s) to cart`);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
    toast.success(
      isFavorite(product.id) ? "Removed from favorites" : "Added to favorites"
    );
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <Header title="Detail Product" showCart showShare cartCount={totalItems} />

      <div className="max-w-md mx-auto">
        {/* Product Image */}
        <div className="aspect-square bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 py-6 space-y-6">
          {/* Product Info */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-price">
                    Rs {product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 rounded-full"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold min-w-[2rem] text-center">
                      {quantity.toString().padStart(2, "0")}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 rounded-full"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-badge text-badge" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                {product.reviews} reviews
              </span>
            </div>
          </div>

          {/* Shop Info */}
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
            <Avatar className="h-12 w-12">
              <img src={product.shop.avatar} alt={product.shop.name} />
            </Avatar>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{product.shop.name}</span>
                {product.shop.verified && (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                )}
              </div>
              <span className="text-xs text-muted-foreground">Official Store</span>
            </div>
          </button>

          <Separator />

          {/* Description */}
          <div className="space-y-3">
            <h2 className="font-bold text-lg">Description Product</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          {/* Reviews */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg">Review ({product.reviews})</h2>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-badge text-badge" />
                <span className="font-bold">{product.rating}</span>
              </div>
            </div>

            <div className="space-y-4">
              {REVIEWS.map((review) => (
                <div key={review.id} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <img src={review.avatar} alt={review.name} />
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">{review.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? "fill-badge text-badge"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              See All Review
            </Button>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg">Related Products</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {relatedProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    {...p}
                    isFavorite={isFavorite(p.id)}
                    onToggleFavorite={() => toggleFavorite(p.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="sticky bottom-0 bg-card border-t border-border p-4">
          <div className="max-w-md mx-auto flex gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={handleToggleFavorite}
              className="flex-1 gap-2"
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite(product.id) ? "fill-accent text-accent" : ""
                }`}
              />
              {isFavorite(product.id) ? "Added" : "Add"}
            </Button>
            <Button size="lg" onClick={handleAddToCart} className="flex-1">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

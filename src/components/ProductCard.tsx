import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  onAddToCart?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
}: ProductCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFavorite(!favorite);
    onToggleFavorite?.();
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-square bg-muted">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-2 right-2 rounded-full h-8 w-8"
            onClick={handleFavoriteClick}
          >
            <Heart className={`h-4 w-4 ${favorite ? "fill-accent text-accent" : ""}`} />
          </Button>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-sm mb-1 line-clamp-2">{name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3 w-3 fill-badge text-badge" />
            <span className="text-xs font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews} Reviews)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-price font-bold">Rs {price.toLocaleString()}</span>
              {originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  Rs {originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {onAddToCart && (
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  onAddToCart();
                }}
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

import { ArrowLeft, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showCart?: boolean;
  showShare?: boolean;
  cartCount?: number;
}

export const Header = ({
  title,
  showBack = true,
  showCart = true,
  showShare = false,
  cartCount = 0,
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-card border-b border-border z-40 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="h-9 w-9"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          {title && <h1 className="text-lg font-semibold">{title}</h1>}
        </div>
        <div className="flex items-center gap-2">
          {showShare && (
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Share2 className="h-5 w-5" />
            </Button>
          )}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/cart")}
              className="h-9 w-9 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
                  {cartCount}
                </Badge>
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

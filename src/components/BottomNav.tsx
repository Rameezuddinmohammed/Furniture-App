import { Home, Heart, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-md mx-auto flex items-center justify-around py-3 px-6">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 ${
            isActive("/") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs font-medium">HOME</span>
        </Link>
        <Link
          to="/favorites"
          className={`flex flex-col items-center gap-1 ${
            isActive("/favorites") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs font-medium">WISHLIST</span>
        </Link>
        <Link
          to="/orders"
          className={`flex flex-col items-center gap-1 ${
            isActive("/orders") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="text-xs font-medium">ORDER</span>
        </Link>
        <Link
          to="/login"
          className={`flex flex-col items-center gap-1 ${
            isActive("/register") || isActive("/login")
              ? "text-primary"
              : "text-muted-foreground"
          }`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs font-medium">LOGIN</span>
        </Link>
      </div>
    </nav>
  );
};

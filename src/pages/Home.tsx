import { useState, useMemo } from "react";
import { MapPin, Bell, Search, Armchair, Lamp, Bed, Sofa } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { BottomNav } from "@/components/BottomNav";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { PRODUCTS } from "@/data/products";
import { toast } from "sonner";

export default function Home() {
  const { addToCart, totalItems } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart(product);
    toast.success("Added to cart");
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 bg-card border-b border-border z-40 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium truncate max-w-[200px]">
              Shirdi Sai Colony, Bheeramguda...
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Product Name"
            className="pl-10 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <div className="relative z-10">
            <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mb-2">
              Super Sale
            </div>
            <h2 className="text-2xl font-bold mb-1">50% OFF</h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400&h=200&fit=crop"
            alt="Sale"
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-90"
          />
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Categories</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              See All
            </Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <CategoryCard
              name="Chair"
              icon={Armchair}
              onClick={() => handleCategoryClick("chair")}
            />
            <CategoryCard
              name="Table"
              icon={Sofa}
              onClick={() => handleCategoryClick("table")}
            />
            <CategoryCard
              name="Bed"
              icon={Bed}
              onClick={() => handleCategoryClick("bed")}
            />
            <CategoryCard
              name="Lamp"
              icon={Lamp}
              onClick={() => handleCategoryClick("lamp")}
            />
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">
              {selectedCategory
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}s`
                : searchQuery
                ? "Search Results"
                : "Featured Products"}
            </h2>
            {(selectedCategory || searchQuery) && (
              <Button
                variant="ghost"
                size="sm"
                className="text-primary"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
              >
                Clear
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isFavorite={isFavorite(product.id)}
                onAddToCart={() => handleAddToCart(product)}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No products found
            </p>
          )}
        </div>

        {/* Promotional Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 p-6">
          <div>
            <h3 className="text-xl font-bold mb-1">CO2 - AAC2</h3>
            <h4 className="text-lg font-semibold mb-2">Chair</h4>
            <Button size="sm" className="bg-background text-foreground hover:bg-background/90">
              Shop now →
            </Button>
          </div>
        </div>

        {/* Best Sellers */}
        {!selectedCategory && !searchQuery && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Best Sellers</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PRODUCTS.slice(0, 6).map((product) => (
                <ProductCard
                  key={`best-${product.id}`}
                  {...product}
                  isFavorite={isFavorite(product.id)}
                  onAddToCart={() => handleAddToCart(product)}
                  onToggleFavorite={() => toggleFavorite(product.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

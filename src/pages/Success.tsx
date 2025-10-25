import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-3xl font-bold">SUCCESS!</h1>

        <div className="py-8">
          <div className="relative w-64 h-64 mx-auto">
            {/* Illustration */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Plant */}
              <path d="M 50 120 Q 45 110 40 100 Q 35 90 40 85 M 50 120 Q 50 110 50 100 M 50 120 Q 55 110 60 100 Q 65 90 60 85" />
              <ellipse cx="50" cy="125" rx="8" ry="15" />
              <line x1="50" y1="125" x2="50" y2="145" />
              <ellipse cx="50" cy="145" rx="12" ry="8" />

              {/* Chair */}
              <rect x="80" y="100" width="60" height="50" rx="10" />
              <path d="M 90 100 L 90 80 M 130 100 L 130 80" />
              <path d="M 85 150 L 85 165 M 135 150 L 135 165" />

              {/* Lamp */}
              <line x1="160" y1="60" x2="160" y2="100" />
              <circle cx="160" cy="55" r="5" />
              <path d="M 150 100 L 160 80 L 170 100 Z" />
              <line x1="150" y1="100" x2="170" y2="100" />
            </svg>

            {/* Success Checkmark */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground">
            Your order will be delivered soon.
          </p>
          <p className="text-muted-foreground">Thank you for choosing our app!</p>
        </div>

        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full"
            onClick={() => navigate("/orders")}
          >
            Track Your Orders
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={() => navigate("/")}
          >
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}

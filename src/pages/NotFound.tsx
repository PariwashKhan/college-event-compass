import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Home, 
  Search, 
  Calendar, 
  ArrowLeft,
  AlertTriangle,
  Compass
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Browse Events', path: '/events', icon: Calendar },
    { label: 'Search', path: '/search', icon: Search },
    { label: 'Explore', path: '/explore', icon: Compass },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <Card className="shadow-strong border-none bg-white/95 backdrop-blur">
          <CardContent className="p-8 text-center space-y-6">
            {/* Error Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mx-auto">
              <AlertTriangle className="h-10 w-10 text-destructive" />
            </div>

            {/* Error Message */}
            <div className="space-y-2">
              <h1 className="text-6xl font-heading font-bold text-primary">404</h1>
              <h2 className="text-2xl font-heading font-semibold">Page Not Found</h2>
              <p className="text-muted-foreground">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Attempted URL */}
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Attempted URL: <code className="font-mono text-destructive">{location.pathname}</code>
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                asChild
              >
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Quick Links</p>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Button
                    key={link.path}
                    variant="ghost"
                    size="sm"
                    className="justify-start"
                    asChild
                  >
                    <Link to={link.path}>
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Help Text */}
            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                If you believe this is an error, please{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  contact our support team
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

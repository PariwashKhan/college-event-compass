import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar,
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn,
  ArrowRight,
  Facebook,
  Chrome,
  Github
} from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: `Welcome back! Redirecting to your ${formData.role} dashboard.`,
      });
      
      // Redirect based on role
      if (formData.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (formData.role === 'organizer') {
        navigate('/organizer/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLogins = [
    { name: 'Google', icon: Chrome, color: 'hover:bg-red-50 hover:border-red-200' },
    { name: 'Facebook', icon: Facebook, color: 'hover:bg-blue-50 hover:border-blue-200' },
    { name: 'GitHub', icon: Github, color: 'hover:bg-gray-50 hover:border-gray-200' }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-medium group-hover:shadow-glow transition-all duration-300">
              <Calendar className="h-7 w-7 text-primary" />
            </div>
            <span className="font-heading font-bold text-2xl text-white">
              EventSphere
            </span>
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-heading font-bold text-white">
              Welcome Back
            </h1>
            <p className="text-white/80">
              Sign in to your account to continue your event journey
            </p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="shadow-strong border-none bg-white/95 backdrop-blur">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-heading text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Choose your account type and enter your credentials
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Role Selection */}
            <Tabs value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student" className="text-xs">Student</TabsTrigger>
                <TabsTrigger value="organizer" className="text-xs">Organizer</TabsTrigger>
                <TabsTrigger value="admin" className="text-xs">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="mt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Access your student dashboard to register for events and view certificates
                </p>
              </TabsContent>
              <TabsContent value="organizer" className="mt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Manage your events, track registrations, and upload certificates
                </p>
              </TabsContent>
              <TabsContent value="admin" className="mt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Administrative access to oversee all platform activities
                </p>
              </TabsContent>
            </Tabs>

            {/* Social Login */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">Sign in with</p>
              <div className="grid grid-cols-3 gap-3">
                {socialLogins.map(({ name, icon: Icon, color }) => (
                  <Button
                    key={name}
                    variant="outline"
                    className={`h-11 ${color} transition-colors`}
                    onClick={() => toast({ title: `${name} login not implemented yet` })}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="student@university.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>Remember me</span>
                </label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign In
                  </>
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-6">
            <Separator />
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Don't have an account?
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/register">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-white/70 text-sm">
            Need help? <Link to="/contact" className="text-white underline hover:no-underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
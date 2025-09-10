import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar,
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  UserPlus,
  ArrowRight,
  CheckCircle,
  Facebook,
  Chrome,
  Github,
  Building,
  GraduationCap,
  Shield
} from 'lucide-react';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    role: 'student',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    enrollmentNumber: '',
    department: '',
    year: '',
    organizationId: '',
    jobTitle: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const departments = [
    'Computer Science', 'Electrical Engineering', 'Mechanical Engineering',
    'Business Administration', 'Mathematics', 'Physics', 'Chemistry',
    'Biology', 'English Literature', 'Psychology', 'Economics'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords don't match. Please check and try again.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful!",
        description: "Welcome to EventSphere! Please check your email to verify your account.",
      });
      navigate('/login');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const socialLogins = [
    { name: 'Google', icon: Chrome, color: 'hover:bg-red-50 hover:border-red-200' },
    { name: 'Facebook', icon: Facebook, color: 'hover:bg-blue-50 hover:border-blue-200' },
    { name: 'GitHub', icon: Github, color: 'hover:bg-gray-50 hover:border-gray-200' }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'student': return GraduationCap;
      case 'organizer': return Building;
      case 'admin': return Shield;
      default: return User;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-8">
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
              Join EventSphere
            </h1>
            <p className="text-white/80">
              Create your account and start discovering amazing events
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="shadow-strong border-none bg-white/95 backdrop-blur">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-heading text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Step {currentStep} of 2: {currentStep === 1 ? 'Choose your role' : 'Complete your profile'}
            </CardDescription>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              ></div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <>
                {/* Role Selection */}
                <Tabs value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="student" className="text-xs">Student</TabsTrigger>
                    <TabsTrigger value="organizer" className="text-xs">Organizer</TabsTrigger>
                    <TabsTrigger value="admin" className="text-xs">Admin</TabsTrigger>
                  </TabsList>

                  <TabsContent value="student" className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Student Account</h3>
                        <p className="text-sm text-muted-foreground">Register for events, earn certificates, and connect with peers</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="organizer" className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Building className="h-8 w-8 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Organizer Account</h3>
                        <p className="text-sm text-muted-foreground">Create and manage events, track attendance, issue certificates</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="admin" className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Shield className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Admin Account</h3>
                        <p className="text-sm text-muted-foreground">Oversee platform activities, manage users, and generate reports</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Social Login */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground text-center">Quick signup with</p>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLogins.map(({ name, icon: Icon, color }) => (
                      <Button
                        key={name}
                        variant="outline"
                        className={`h-11 ${color} transition-colors`}
                        onClick={() => toast({ title: `${name} signup not implemented yet` })}
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

                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@university.edu"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button onClick={nextStep} variant="hero" size="lg" className="w-full">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </>
            )}

            {currentStep === 2 && (
              <>
                {/* Password Fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
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
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Role-specific Fields */}
                {formData.role === 'student' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="enrollmentNumber">Enrollment Number</Label>
                      <Input
                        id="enrollmentNumber"
                        name="enrollmentNumber"
                        placeholder="EN123456789"
                        value={formData.enrollmentNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select value={formData.department} onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="year">Academic Year</Label>
                        <Select value={formData.year} onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {years.map((year) => (
                              <SelectItem key={year} value={year}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {formData.role === 'organizer' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="organizationId">Organization ID</Label>
                      <Input
                        id="organizationId"
                        name="organizationId"
                        placeholder="ORG123456"
                        value={formData.organizationId}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Event Coordinator"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                    />
                    <div className="text-sm leading-relaxed">
                      <Label htmlFor="agreeToTerms" className="cursor-pointer">
                        I agree to the{' '}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToMarketing"
                      checked={formData.agreeToMarketing}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToMarketing: checked as boolean }))}
                    />
                    <Label htmlFor="agreeToMarketing" className="text-sm cursor-pointer">
                      I'd like to receive updates about new events and features (optional)
                    </Label>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button onClick={prevStep} variant="outline" size="lg" className="w-full">
                    Back
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-5 w-5" />
                        Create Account
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-6">
            <Separator />
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Already have an account?
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">
                  Sign In Instead
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
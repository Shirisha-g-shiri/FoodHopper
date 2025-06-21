
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OwnerLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    restaurantName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement authentication logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Restaurant Owner Portal
              </h1>
              <p className="text-gray-600">
                {isLogin ? "Sign in to manage your restaurant" : "Join FoodHopper as a partner"}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </CardTitle>
                <CardDescription className="text-center">
                  {isLogin 
                    ? "Enter your credentials to access your dashboard" 
                    : "Fill in your details to get started"
                  }
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10"
                            required={!isLogin}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10"
                            required={!isLogin}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="restaurantName">Restaurant Name</Label>
                        <div className="relative">
                          <Input
                            id="restaurantName"
                            name="restaurantName"
                            type="text"
                            placeholder="Enter your restaurant name"
                            value={formData.restaurantName}
                            onChange={handleInputChange}
                            required={!isLogin}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
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
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="remember"
                          className="rounded border-gray-300"
                        />
                        <label htmlFor="remember" className="text-gray-600">
                          Remember me
                        </label>
                      </div>
                      <Link
                        to="/forgot-password"
                        className="text-orange-500 hover:text-orange-600"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    {isLogin ? "Sign In" : "Create Account"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="ml-1 text-orange-500 hover:text-orange-600 font-medium"
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </div>

                {!isLogin && (
                  <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2">Partner Benefits:</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Reach thousands of hungry customers</li>
                      <li>• Easy booking and table management</li>
                      <li>• Real-time analytics and insights</li>
                      <li>• No setup fees - pay only for bookings</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                Need help? <Link to="/contact" className="text-orange-500 hover:text-orange-600">Contact our support team</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerLogin;

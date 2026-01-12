import React from "react";

import { Code, Smartphone, Palette, Cloud, Cpu, Shield, ArrowRight} from "lucide-react";
import Button from "../components/ui/Button" 
import Card from "../components/ui/Card" 


const Home = () => {
  const { navigate } = useRouter();

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      color: "green",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design experiences",
      color: "purple",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration",
      color: "orange",
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description: "Intelligent automation and AI integration",
      color: "red",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security solutions",
      color: "indigo",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="block text-blue-200">
                Innovative Software Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We build enterprise-grade applications that drive growth and
              efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="primary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive software solutions for modern enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                hover
                className="cursor-pointer"
                onClick={() => navigate("/services")}
              >
                <div
                  className={`w-12 h-12 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-lg flex items-center justify-center mb-4`}
                >
                  <service.icon
                    className={`w-6 h-6 text-${service.color}-600 dark:text-${service.color}-400`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help transform your business
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => navigate("/contact")}
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

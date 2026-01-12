import React from "react";
import { Link } from "react-router-dom";
import { Code, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { navigate } = useRouter();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile Apps", path: "/services/mobile-development" },
      { name: "UI/UX Design", path: "/services/uiux-design" },
      { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">TechCorp</span>
            </div>
            <p className="text-sm mb-4">
              Building innovative software solutions for enterprises worldwide.
            </p>
            <div className="flex space-x-4">
              <Mail className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <Phone className="w-5 h-5 cursor-pointer hover:text-blue-400" />
              <MapPin className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 TechCorp Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

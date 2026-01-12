// import Card from "../../components/ui/Card";
// import Input from "../../components/ui/Input";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "../../components/ui/Button";
// import { useState } from "react";
// import { Code, Mail, Shield,  } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";



// const LoginPage = () => {
//   const { login } = useAuth();
//   const { navigate } = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login({ name: "John Doe", email, role: "user" });
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="max-w-md w-full">
//         <div className="text-center mb-8">
//           <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-400">
//             Or{" "}
//             <Link to="/register" className="text-blue-600 hover:text-blue-500">
//               create a new account
//             </Link>
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <Input
//             label="Email address"
//             type="email"
//             icon={Mail}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//             required
//           />

//           <Input
//             label="Password"
//             type="password"
//             icon={Shield}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••"
//             required
//           />

//           <div className="flex items-center justify-between">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//               />
//               <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
//                 Remember me
//               </span>
//             </label>
//             <Link
//               to="/forgot-password"
//               className="text-sm text-blue-600 hover:text-blue-500"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           <Button type="submit" className="w-full">
//             Sign in
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// };


// export default LoginPage;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Code, Mail, Shield } from "lucide-react";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // mock login (replace with API later)
    login({ name: "John Doe", email, role: "user" });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full">
        <div className="text-center mb-8">
          <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-500">
              create a new account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email address"
            type="email"
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <Input
            label="Password"
            type="password"
            icon={Shield}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Remember me
              </span>
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;

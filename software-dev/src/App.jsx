import Card from "./components/ui/Card";
import Badge from "./components/ui/Badge";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import LoginPage from "./pages/auth/LoginPage";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import Home from "./pages/Home";

function App() {

  return (
    <>
      <LoginPage/>
      {/* <Home/> */}
      {/* <Header/> */}
      {/* <Footer/> */}

      <p
        className="
      text-red-600 text-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi
        assumenda dolorem, quisquam eveniet ad quis, quam neque aperiam numquam
        quaerat cupiditate, corporis inventore quia repudiandae architecto
        consequatur dignissimos. Fuga?
      </p>

      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        explicabo eius voluptatibus officia recusandae harum corporis quos
        eligendi? Suscipit dignissimos et temporibus eligendi. Sapiente illum
        sit aperiam consectetur iste fuga.
      </Card>
      <Badge variant="success">hello</Badge>
      <LoadingSpinner size={`md`} />
    </>
  );
}

export default App

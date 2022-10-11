
import Header from "./components/Header";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const nav_list = [
    { link: "/home", title: "Home" },
    { link: "/contact-us", title: "Contact Us" },
    { link: "/about", title: "About Us" },
  ]
  return (
    <div className=''>
      {/* <Modal /> */}
      <Header title={"Stream Kit"} nav_list={nav_list} />
      <Section />
      {/* <Form /> */}
      <Sidebar />



    </div>
  );
}

export default App;

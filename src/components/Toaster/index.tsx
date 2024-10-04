import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => (
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={true}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    className="mt-[82px] mr-3"
    data-testid="toaster"
    toastStyle={{
      backgroundColor: "#18181b",
      color: "white",
    }}
  />
);

export default Toaster;

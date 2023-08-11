import Footer from "../../components/footer";
import FormLogin from "../../components/formLogin";

export default function Login() {
  return (
    <>
    <div className="flex flex-col justify-between h-screen">
      <div className="flex-auto ">
        <FormLogin />
      </div>
      <div className="flex flex-row ">
        <Footer />
      </div>
    </div>
    </>    
  );
}

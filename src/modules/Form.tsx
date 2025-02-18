import { FormEvent, useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { useNavigate } from "react-router";
import axios from "axios";

interface addressType {
  state: string;
  city: string;
  country: string;
}

interface dataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  address: addressType;
}

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState<dataType>(() => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: 0,
    address: {
      state: "",
      city: "",
      country: "",
    },
  }));
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSignInPage) {
      try {
        await axios.post("/users/register", { ...data });
        navigate("/sign_in");
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const val = await axios.post("/users/login", {
          email: data.email,
          password: data.password,
        });
        console.log(val);
        localStorage.setItem("user:token", val.data.data.token);
        localStorage.setItem("user:data", JSON.stringify(val.data.data.user));
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleNavigation = () => {
    navigate(isSignInPage ? "/sign_up" : "/sign_in");
  };

  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">
        Welcome {isSignInPage && "Back"}
      </div>
      <div className="text-xl font-light mb-14">
        {isSignInPage ? "Sign in to get explored" : "Sign up to get started"}
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        {!isSignInPage && (
          <Input
            label="First Name"
            name="name"
            placeholder="Please enter your full name"
            className="w-1/2 mb-6"
            value={data.firstName}
            onChange={(e: { target: { value: string } }) =>
              setData({ ...data, firstName: e.target.value })
            }
          />
        )}
        {!isSignInPage && (
          <Input
            label="Last Name"
            name="name"
            placeholder="Please enter your full name"
            className="w-1/2 mb-6"
            value={data.lastName}
            onChange={(e: { target: { value: string } }) =>
              setData({ ...data, lastName: e.target.value })
            }
          />
        )}
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Please enter your email address"
          className="w-1/2 mb-6"
          value={data.email}
          onChange={(e: { target: { value: string } }) =>
            setData({ ...data, email: e.target.value })
          }
        />
        <Input
          label="Password"
          name="password"
          placeholder="Please enter your Password"
          className="w-1/2 mb-14"
          type="password"
          value={data.password}
          onChange={(e: { target: { value: string } }) =>
            setData({ ...data, password: e.target.value })
          }
        />
        <Button
          className="w-1/2"
          type="submit"
          label={isSignInPage ? "Sign in" : "Sign up"}
          disabled={false}
        />
      </form>
      <div className="pt-2">
        {isSignInPage ? "Don't have an account?" : "Alredy have an account?"}{" "}
        <span
          className=" text-primary cursor-pointer underline"
          onClick={handleNavigation}
        >
          {isSignInPage ? "Sign up" : "Sign in"}
        </span>
      </div>
    </div>
  );
};

export default Form;

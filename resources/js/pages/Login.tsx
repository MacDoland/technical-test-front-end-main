import { useState } from "react";
// import useSignIn from "react-auth-kit/hooks/useSignIn";
// import axios from "axios";
// import { signInFunctionParams } from "react-auth-kit";
// import ErrorPage from "./errors/ErrorPage";
// import { Navigate, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ZodError, z } from "zod";
import ActionButton from "../components/ActionButton";

// interface SignInConfig {
//   auth: {
//     token: string;
//     type: string;
//   };

//   expiresIn: number;
// }

interface ValidationError {
  key: number;
  message: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ValidationError[]>([]);

  // const signIn = useSignIn();
  const navigate = useNavigate();
  const usernameSchema = z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z0-9_]+$/);
  const passwordSchema = z.string().min(8).max(50);

  const onSubmit = (): void => {
    try {
      usernameSchema.parse(username);
      passwordSchema.parse(password);

      // const response = await axios.post("/api/authenticate", {
      //   username,
      //   password,
      // });

      // const signInConfig: signInFunctionParams<SignInConfig> = {
      //   auth: {
      //     token: response.data.token,
      //     type: "Bearer",
      //   },
      // };

      // signIn(signInConfig);

      navigate("/");
    } catch (e) {
      if (e instanceof ZodError) {
        const validationErrors: ValidationError[] = e.errors.map(
          (validationError, index) => {
            return { key: index, message: validationError.message };
          },
        );
        setErrors(validationErrors);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="login">
            Username:
            <input
              id="login"
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password:
            <input
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        {errors.map(error => (
          <div key={error.key} className="text-red-500">
            {error.message}
          </div>
        ))}
        <div className="mt-8">
          <ActionButton onClick={onSubmit}>Login</ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Login;

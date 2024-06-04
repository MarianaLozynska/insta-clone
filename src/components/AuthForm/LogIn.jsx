import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        placeholder="email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
      />
      <Input
        placeholder="password"
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => {
          setInputs({ ...inputs, password: e.target.value });
        }}
      />
      <Button w={"full"} colorScheme={"blue"} size={"sm"} fontSize={14}>
        Log In
      </Button>
    </>
  );
};

export default LogIn;

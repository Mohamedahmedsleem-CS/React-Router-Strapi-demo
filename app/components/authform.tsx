import React, { useState, type FormEvent } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { registerSchema, type RegisterSchemaData } from "~/schema/register";
import { Label } from "./ui/label";

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "Ali",
    },
  });

  console.log(errors);
  // const [userData, setUserData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // })

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value })
  // }

  const onSubmit = (data: RegisterSchemaData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-10  ">
      <Label htmlFor="username">UserName</Label>

      <Input type="text" placeholder="username" id="username" {...register("username")} />
      {errors.username && (
        <span className="text-red-700">{errors.username.message}</span>
      )}
      <Label htmlFor="email">Email</Label>

      <Input type="text" placeholder="Email" id="email" {...register("email")} />
      {errors.email && (
        <span className="text-red-700">{errors.email.message}</span>
      )}
      <Label htmlFor="password">Password</Label>

      <Input type="password" placeholder="password" id="password" {...register("password")} />
      {errors.password && (
        <span className="text-red-700">{errors.password.message}</span>
      )}
      <Button type="submit" className="cursor-pointer w-full">
        submit
      </Button>
    </form>
  );
};

export default AuthForm;

"use server";

import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import userData from "@/models/userData";
import { currentUser } from "@clerk/nextjs/server";

export async function registerUser(formData: FormData) {
  const name: string | null = formData.get("name") as string | null;
  const email: string | null = formData.get("email") as string | null;
  const password: string | null = formData.get("password") as string | null;

  if (!(name && email && password)) {
    return { message: "Any field can't be empty", status: 500 };
  }
  await connectMongoDB();
  await User.create({ name, email, password });
  return { message: "User registered.", status: 201 };
}

export async function registerOrFetchUser() {
  const user = (await currentUser())!;
  await connectMongoDB();
  const data = await userData.create({
    name: user.fullName,
    userName: user.username,
    department: "",
    designation: "",
  });
  return { message: "User registered.", status: 201, data };
}

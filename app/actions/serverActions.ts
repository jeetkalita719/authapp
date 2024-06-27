"use server";

import { connectMongoDB } from "@/lib/mongodb";
import OrdersData from "@/models/ordersData";
import User from "@/models/user";
import userData from "@/models/userData";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const user = (await currentUser())!;
  const designation: string | null = formData.get("designation") as
    | string
    | null;
  const department: string | null = formData.get("department") as string | null;

  if (!(designation && department)) {
    return { message: "Any field can't be empty", status: 500 };
  }
  await connectMongoDB();

  const data = await userData.create({
    name: user.fullName,
    username: user.username,
    department,
    designation,
  });
  revalidatePath("/onboarding");
  return { message: "User registered.", status: 201, data };
}

export async function fetchUser() {
  const user = (await currentUser())!;
  await connectMongoDB();

  const userRecord = await userData.findOne({
    username: user.username,
  });

  if (userRecord) {
    return { message: "User found already.", status: 201, data: userRecord };
  }
}

export async function placeNewOrder(formData: FormData) {
  const user = (await currentUser())!;
  const namePlate: boolean | null =
    (formData.get("namePlate") as string | null) == "on";
  const namePlateRemarks: string | null = formData.get("namePlateRemarks") as
    | string
    | null;
  const visitingCard: boolean | null =
    (formData.get("visitingCard") as string | null) == "on";
  const visitingCardRemarks: string | null = formData.get(
    "visitingCardRemarks"
  ) as string | null;
  const stamp: boolean | null =
    (formData.get("stamp") as string | null) == "on";
  const stampRemarks: string | null = formData.get("stampRemarks") as
    | string
    | null;

  const data = await OrdersData.create({
    order: {
      namePlate: {
        required: namePlate,
        remarks: namePlateRemarks,
      },
      visitingCard: {
        required: visitingCard,
        remarks: visitingCardRemarks,
      },
      stamp: { required: stamp, remarks: stampRemarks },
    },
    username: user.username,
  });
  if (data) {
    redirect("/");
  }
}

export default async function fetchUserOrders(){
  const user = (await currentUser())!;
  await connectMongoDB();
  const userOrders = await OrdersData.find({
    username: user.username,
  });

  return userOrders;
}
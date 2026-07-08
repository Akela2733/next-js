"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Mock actions for frontend-only app
export async function createAirbnbHome({ userId }: { userId: string }) {
  // Database disabled in frontend-only mode
  return redirect("/");
}

export async function createCategoryPage(formData: FormData) {
  return redirect("/");
}

export async function CreateDescription(formData: FormData) {
  return redirect("/");
}

export async function createLocation(formData: FormData) {
  return redirect("/");
}

export async function addToFavorite(formData: FormData) {
  // Mock favorite action
  revalidatePath("/");
}

export async function DeleteFromFavorite(formData: FormData) {
  // Mock unfavorite action
  revalidatePath("/");
}

export async function createReservation(formData: FormData) {
  // Mock reservation action
  return redirect("/");
}
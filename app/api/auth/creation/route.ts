import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();

  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      console.error("User session not found or user ID is missing.");
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    let dbUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (!dbUser) {
      console.log(`User not found in database, creating a new user: ${user.email}`);
      dbUser = await prisma.user.create({
        data: {
          email: user.email ?? "",
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          id: user.id,
          profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    console.log("User successfully retrieved or created:", dbUser);

    return NextResponse.redirect("https://next-js-p6mq-iqs51gtwj-akela2733s-projects.vercel.app");
  } catch (error) {
    console.error("Error during API call:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

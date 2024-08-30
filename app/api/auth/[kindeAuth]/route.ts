// app/api/user/route.ts
import { handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();


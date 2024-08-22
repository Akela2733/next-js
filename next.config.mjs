import { hostname } from "os";

const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "a0.muscache.com",
          protocol: "https",
          port: "",
        },
        {
          hostname: "glvmmupiqwlmhicmggqp.supabase.co",
          protocol: "https",
          port: "",
        },
      ],
    },
  };

export default nextConfig;

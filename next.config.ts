import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export' removido — projeto usa API route (/api/contato) que requer server mode
  // AWS Amplify: usar baseDirectory .next com suporte a Next.js SSR
};

export default nextConfig;

import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/austin-therapy")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
  component: () => null,
});

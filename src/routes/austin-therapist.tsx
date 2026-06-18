import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/austin-therapist")({
  beforeLoad: () => {
    throw redirect({ to: "/about", statusCode: 301 });
  },
  component: () => null,
});

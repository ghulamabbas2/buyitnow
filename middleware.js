import { withAuth } from "next-auth/middleware";

export default withAuth(async function middleware(req) {
  // authorize roles
});

export const config = {
  matcher: ["/me"],
};

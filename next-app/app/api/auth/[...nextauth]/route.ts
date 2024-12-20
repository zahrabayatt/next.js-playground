import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

// in route file, we can only export GET,POST,PuT,DELETE and authOptions is not valid export here and we should put this in separate module:

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "Email" },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "Password",
//         },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) return null;

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user) return null;

//         const passwordMatched =
//           user.hashedPassword &&
//           (await bcrypt.compare(credentials.password, user.hashedPassword));

//         return passwordMatched ? user : null;
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

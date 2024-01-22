import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogout from "@/components/buttonLoggout";
import { getServerSession } from "next-auth";

export default async function Transparencia() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <main>
      <h2>Olá {session?.user.LOGIN}</h2>
      <p>{session?.user.SISTEMA}</p>
      <p>{session?.user.ESIC}</p>
      <p>{session?.user.PESSOA}</p>
      <ButtonLogout />
    </main>
  );
}

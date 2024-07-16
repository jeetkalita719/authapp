import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="bg-red-400 h-screen w-screen flex justify-center items-center bg-cover bg-center">
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <SignIn forceRedirectUrl={"/"} />
      </div>
    </main>
  );
}

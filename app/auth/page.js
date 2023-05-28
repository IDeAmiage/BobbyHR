import AuthUserForm from "@/components/auth-form";
import pb from "@/lib/pocketbase";

const LoginPage = () => {
  console.log("login page");
  const isLoggedIn = pb.authStore.isValid;

  if (isLoggedIn) {
    return <h1>Logged in : {pb.authStore.model.username}</h1>;
  } else {
    return (
      <main className="bg-white_background_bobby flex min-h-screen flex-col items-center justify-center">
        <div className="py-8">
          <h1 className="font-Playfair text-black_bobby text-7xl font-extrabold">
            Connexion
          </h1>
        </div>
        <div className="flex-col">
          <AuthUserForm />
          <div className="flex justify-end">
            <button className="font-Playfair text-gray_bobby/70 hover:text-black_bobby/70">
              {" "} Mot de passe oublié ?
            </button>
          </div>
        </div>
      </main>
    );
  }
};

export default LoginPage;

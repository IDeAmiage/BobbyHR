import AuthUserForm from "@/components/auth-form";
import pb from "@/lib/pocketbase";

const LoginPage = () => {
  console.log("login page");
  const isLoggedIn = pb.authStore.isValid;

  if (isLoggedIn) {
    return <h1>Logged in : {pb.authStore.model.username}</h1>;
  } else {
    console.log("not logged in");
    return (
      <main className="flex flex-col min-h-screen justify-center items-center bg-white_background_bobby">
        <div className="py-8">
          <h1 className="text-7xl font-Playfair font-extrabold text-black_bobby">
            Connexion
          </h1>
        </div>
        <div className="flex-col">
          <AuthUserForm />
          <div className="flex justify-end">
            <button className="font-Playfair text-gray_bobby/70 hover:text-black_bobby/70">
              {" "}
              Mot de passe oublié ?
            </button>
          </div>
        </div>
      </main>
    );
  }
};

export default LoginPage;

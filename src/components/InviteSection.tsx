import Button from "./Button";

export default function () {
  return (
    <div className="min-h-[40vh] bg-primary flex flex-col gap-4 lowercase items-center justify-center">
      <div className="lg:text-5xl text-3xl text-center">
        What are you waiting for?
      </div>
      <Button
        href="https://discord.com/api/oauth2/authorize?client_id=868697725464633414&permissions=379904&scope=bot%20applications.commands"
        className="bg-white text-black hover:bg-white/90 hover:text-black"
      >
        add to server
      </Button>
    </div>
  );
}

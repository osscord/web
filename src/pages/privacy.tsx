export default function Privacy() {
  return (
    <div className="px-32 py-24">
      <h1 className="text-[32px] font-bold mb-3">Privacy Policy</h1>

      <div className="flex flex-col gap-3">
        <p>
          This is our "Privacy Policy" which sets out the policy which governs
          our use of information you provide in connection with the osscord bot.
          The terms "you" and "your" refer to all individuals or entities using
          the bot. The terms "we," "us," "our," refer to masked#0959 and "bot"
          refers to osscord.
        </p>

        <h2 className="text-2xl font-bold mt-6">Access to Data</h2>
        <p>
          Access to Data is only permitted to the bot's developers, and only in
          the scope required for the development, testing, and implementation of
          features for the bot. Data is not sold, provided to, or shared with
          any third party, except where required by law or a Terms of Service
          agreement. You can view the data upon request from masked#0959.
        </p>
        <h2 className="text-2xl font-bold mt-6">Storage of Data</h2>
        <p>
          Data is stored in a MongoDB database. The database is secured to
          prevent external access, however no guarantee is provided and the
          bot's owners assume no liability for the unintentional or malicious
          breach of Data. In the event of an unauthorised data access, users
          will be notified through the Discord client application.
        </p>
        <h2 className="text-2xl font-bold mt-6">User Rights</h2>
        <p>
          At any time, you have the right to request to view the data pertaining
          to your Discord account. You may submit a request through the{" "}
          <a href="https://discord.gg/6Krt8jfEuX" target="_blank">
            Support Server
          </a>
          . You have the right to request the removal of relevant Data.
        </p>
        <h2 className="text-2xl font-bold mt-6">Questions</h2>
        <p>
          If you have any questions or are concerned about what data might be
          being stored from your account contact masked#0959. For more
          information check the{" "}
          <a href="https://discord.com/terms" target="_blank">
            Discord Terms Of Service.
          </a>
        </p>
      </div>
    </div>
  );
}

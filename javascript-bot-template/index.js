import { command } from './cmd/cmd';
import { clickMePrimaryComponent } from './components/click-me-primary';
import { createApplicationCommandHandler, Permissions } from '@discordcf/framework';

let applicationCommandHandler;

export default {
  fetch: async (request, env, context) => {
    if (!applicationCommandHandler) {
      applicationCommandHandler = createApplicationCommandHandler({
        applicationId: env.APPLICATION_ID,
        publicKey: env.PUBLIC_KEY,
        botToken: env.BOT_TOKEN,
        commands: [command], // Import and register your commands here.
        components: [clickMePrimaryComponent], // Import and register your message components here.
        guildId: env.GUILD_ID, // The GUILD_ID is optional. Don't set it up if you want your command at global level.
        permissions: new Permissions(
          [
            'SendMessages', // Add your bot permissions here as a list of string.
          ]
        )
      },
        env,
        context
      );
    }
    return applicationCommandHandler(request);
  },
}
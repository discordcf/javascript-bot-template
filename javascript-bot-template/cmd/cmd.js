import { InteractionResponseType } from '@discordcf/framework';

// Your command can use any InteractionType
export const command = {
  command: {
    name: "cmd",
    description: "A command.",
  },
  handler: async (interaction, env, context) => {
    /* This arrow function works as a command handler.
    * Everytime the command is called, this function is executed.
    *
    * You can use any of the three variables: interaction, env, and context in the handler.
    */
    return {
      type: InteractionResponseType.ChannelMessageWithSource, // The command supports any of the InteractionResponseType
      data: {
        content: `A commmand`,
      },
    };
  }
}

export default command;
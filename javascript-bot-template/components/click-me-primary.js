import { InteractionResponseType } from '@discordcf/framework';

export const clickMePrimaryComponent = {
  component: {
    type: 2,
    label: 'Primary',
    style: 1,
    custom_id: 'primary',
  },
  handler: async (ctx) => {
    ctx.defer(async (ctx) => {
      await ctx.followup.reply({ content: 'And this is a deferred hello!' });
    });
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: 'Hello from component handler.',
      },
    };
  },
};

export default clickMePrimaryComponent;
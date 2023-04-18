module.exports = {
  prompt: async ({ prompter }) => {
    const args = [
      {
        type: "snippet",
        name: "pagePath",
        message: "パスを入力してください",
        template: `src/pages/\${pagesPath}.tsx`,
        required: true,
      },
    ];
    const { pagePath } = await prompter.prompt(args);
    return {
      pagePath: pagePath.result,
    };
  },
};

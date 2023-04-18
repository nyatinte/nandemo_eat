// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
module.exports = {
  prompt: ({ inquirer, h }) => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "コンポーネント名を入力してください",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "空文字は入力できません。もう一度入力してください。";
        },
      },
      {
        type: "input",
        name: "directory",
        message:
          "コンポーネントのディレクトリを入力してください。srcは省略されます。 \n(例: components)",
        default: "components",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      answers.name = h.changeCase.pascalCase(answers.name);
      return answers;
    });
  },
};

# How to create a PR for wix-style-react

wix-style-react is an open source ui library, therefore everyone is invited to contribute by solving bugs, improving documentation, and add new components (as long as they are aligned with our design guidelines).

### Prerequisites

1. Code must be compatible with required React and Stylable versions mentioned in [Readme.md](../../README.md).
2. Your commits must be signed (relevant only if you're a part of wix organization)

### Title
A PR title should be composed like so:
```
<ComponentName/> - What I did there
```
If the change is relevant only to Testkit/Docs/Types, you may add `[Testkit]`/`[Docs]`/`[Types]` to the title.
Also, feel free to use labels to help us categorize your PR better.

### Sign commits
##### Motivation:
Due to security reasons we decided to enforce signed commits.
This way we can prevent attackers to use spoofed addresses.

##### How to sign commits:
1. Generate a GPG key - read more [here](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-gpg-key).
  Make sure you create the key with the email you use to sign-in to your Github account, which should be the same email you get when running this: `git config --global user.email` (If your email isn't configured, you can add it by running `git config --global user.email "email@example.com"`)
2. Set your Public key on you GitHub account - https://github.com/settings/keys
3. Use this command to commit - `git commit -S -am "…"` to sign your commit, or `git config --global commit.gpgsign true` for automatic sign.
4. You can verify your commit is signed - `git log --show-signature`

More information on [signing commits](https://docs.github.com/en/github/authenticating-to-github/signing-commits)

_Note:_ A PR that comes from a forked repository is **not valid** and will be treated as **unsigned** by the CI.

##### FAQ:

Q: I'm getting the following error:
```bash
error: gpg failed to sign the data
fatal: failed to write commit object
```
A: Tell your local git client about your newly generated GPG key [instructions here](https://docs.github.com/en/github/authenticating-to-github/telling-git-about-your-signing-key).

Q: I'm getting the following error:
```bash
The user "xxx" that created this commit is not a member of the repository's organization ("wix"), PR is dangerous, will not run this build.
```
A: Make sure your PR comes from a
 **cloned** repository and not a **forked** one. If you need more help, let us know.

Q: I'm not a wix employee, can I contribute to wix-style-react without signing my commits?

A: Sure! Just let us know in the description of the PR, a maintainer will check your code and verify it for you.

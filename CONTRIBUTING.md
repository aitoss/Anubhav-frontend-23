# Contribution Guidelines

## Coding Style Guide

We welcome contributions from the community. If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them:

```bash
git commit -m "Add your feature or bug fix"
```

4. Push your changes to your fork:

```bash
git push origin feature/your-feature-name
```

5. Create a pull request to the main branch of this repository.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **style**: CSS Changes
- **cleanup**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, dead code removal etc.)
- **refactor**: A code change that neither fixes a bug or adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or fixing them
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation
- **tracking**: Any kind of tracking which includes Bug Tracking, User Tracking, Anyalytics, AB-Testing etc
- **docs**: Documentation only changes

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes"
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference issues that this commit **Closes**.

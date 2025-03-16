# Using Changesets in VernisAI

This project uses [Changesets](https://github.com/changesets/changesets) for version management and changelog generation. This document explains how to use changesets in your development workflow.

## What are Changesets?

Changesets are a way to manage versioning and changelogs for your project. They allow you to:

- Document changes as you make them
- Automatically generate changelogs
- Manage semantic versioning (major, minor, patch)
- Automate the release process

## Workflow

### 1. Making Changes

When you make changes to the codebase, you should create a changeset to document those changes:

```bash
npm run changeset
```

This will prompt you to:

1. Select the packages that have changed (in our monorepo setup)
2. Specify the type of change (major, minor, patch)
3. Provide a description of the change

### 2. Commit Your Changes

After creating a changeset, you should commit both your code changes and the generated changeset file:

```bash
git add .
git commit -m "feat: your feature description"
```

### 3. Creating a Pull Request

When you create a pull request, the changeset files will be included. This helps reviewers understand the impact of your changes.

### 4. Versioning and Publishing

When changes are merged to the main branch, the maintainers can run:

```bash
npm run version
```

This will:

- Update package versions based on the changesets
- Update the changelog
- Remove the changeset files

Then, to publish the new versions:

```bash
npm run release
```

## Types of Changes

When creating a changeset, you'll need to specify the type of change:

- **major**: Breaking changes that require users to update their code
- **minor**: New features that don't break existing functionality
- **patch**: Bug fixes and small improvements that don't add new features

## Best Practices

1. **Create changesets as you work**: Don't wait until the end of your work to create changesets.
2. **Be descriptive**: Write clear, concise descriptions that explain what changed and why.
3. **One changeset per logical change**: If you're making multiple unrelated changes, create multiple changesets.
4. **Include context**: Mention related issues or PRs in your changeset descriptions.
5. **Consider the impact**: Be thoughtful about whether your change is a patch, minor, or major version bump.

## Example Changeset

Here's an example of what a changeset file might look like:

```md
---
'@vernisai/website': minor
'@vernisai/api': patch
---

Added a new feature to the website that allows users to filter results by date.
Fixed a bug in the API that was causing incorrect timestamps.
```

## Integration with Changes Directory

In addition to changesets, we maintain a `changes` directory with date-based markdown files. When creating a PR, you should:

1. Create a changeset using `npm run changeset`
2. Update the appropriate date file in the `changes` directory with a concise title and bullet points

This dual approach ensures we have both structured data for versioning and human-readable summaries of changes.

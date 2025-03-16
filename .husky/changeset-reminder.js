#!/usr/bin/env node

import { execSync } from 'child_process';

// Get the list of staged files
const stagedFiles = execSync('git diff --cached --name-only', {
    encoding: 'utf-8',
})
    .split('\n')
    .filter(Boolean);

// Check if there are any code changes (excluding .changeset files and changes directory)
const hasCodeChanges = stagedFiles.some((file) => {
    return (
        !file.startsWith('.changeset/') &&
        !file.startsWith('changes/') &&
        file !== '.changeset/README.md' &&
        file !== '.changeset/config.json'
    );
});

// Check if there are any changeset files staged
const hasChangesetFiles = stagedFiles.some(
    (file) =>
        file.startsWith('.changeset/') &&
        file !== '.changeset/README.md' &&
        file !== '.changeset/config.json',
);

// Check if there are changes to the changes directory
const hasChangesDirectoryUpdates = stagedFiles.some((file) =>
    file.startsWith('changes/'),
);

// If there are code changes but no changeset files and no changes directory updates
if (hasCodeChanges && !hasChangesetFiles && !hasChangesDirectoryUpdates) {
    console.warn(
        '\x1b[33m%s\x1b[0m',
        '⚠️  Warning: You have code changes but no changeset file.',
    );
    console.warn(
        '\x1b[33m%s\x1b[0m',
        'Consider creating a changeset to document your changes:',
    );
    console.warn('\x1b[36m%s\x1b[0m', '  npm run changeset');
    console.warn(
        '\x1b[33m%s\x1b[0m',
        'Also remember to update the appropriate file in the changes directory.',
    );
    console.warn(
        '\x1b[33m%s\x1b[0m',
        'For more information, see docs/CHANGESETS.md',
    );

    // This is just a reminder, so we don't exit with an error code
    process.exit(0);
}

// Everything is good
process.exit(0);

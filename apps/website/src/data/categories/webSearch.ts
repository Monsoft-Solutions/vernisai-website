// Import the Action type
import { Action } from '../types/action';
import { ActionCategory } from '../types/ActionCategory';

// Define the web search actions
const braveSearchAction: Action = {
    id: 'brave-search',
    name: 'Brave Search',
    description: 'Web and local search using Brave search API',
    longDescription:
        'Perform web searches using the Brave Search API with privacy-focused results.',
    iconName: 'Search',
    benefits: [
        'Privacy-focused search',
        'Comprehensive web results',
        'No tracking',
        'Customizable search parameters',
    ],
    useCases: [
        'Research assistance',
        'Information gathering',
        'Fact checking',
        'Content discovery',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const puppeteerAction: Action = {
    id: 'puppeteer',
    name: 'Puppeteer',
    description: 'Browser automation and web scraping',
    longDescription:
        'Automate browser interactions for web scraping, testing, and automation.',
    iconName: 'Globe',
    benefits: [
        'Full browser automation',
        'Web scraping capabilities',
        'Screenshot capture',
        'Form interaction',
    ],
    useCases: [
        'Data collection',
        'Web testing',
        'Automated workflows',
        'Content extraction',
    ],
    implementation: 'Model Context Protocol',
    source: 'modelcontextprotocol/servers',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const hackerNewsAction: Action = {
    id: 'hacker-news',
    name: 'Hacker News',
    description: 'Parse and retrieve stories from news.ycombinator.com',
    longDescription:
        'Access and search through Hacker News stories, comments, and discussions.',
    iconName: 'Globe',
    benefits: [
        'Real-time tech news access',
        'Community discussion insights',
        'Trending topic awareness',
        'Tech industry pulse',
    ],
    useCases: [
        'Tech trend monitoring',
        'Industry research',
        'Content curation',
        'Discussion analysis',
    ],
    implementation: 'Model Context Protocol',
    source: 'pskill9/hn-server',
    sourceUrl: 'https://github.com/pskill9/hn-server',
};

const urlFetcherAction: Action = {
    id: 'url-fetcher',
    name: 'URL Fetcher',
    description: 'Retrieve and analyze content from any URL',
    longDescription:
        'Fetch and process content from web URLs for analysis and information extraction.',
    iconName: 'Globe',
    benefits: [
        'Universal web content access',
        'Content extraction',
        'HTML parsing',
        'Data retrieval',
    ],
    useCases: [
        'Research automation',
        'Content analysis',
        'Data collection',
        'Information aggregation',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the web search category
export const webSearchCategory: ActionCategory = {
    id: 'web-search',
    name: 'Web & Search',
    iconName: 'Globe',
    description: 'Access and interact with web content and search services',
    actions: [
        braveSearchAction,
        puppeteerAction,
        hackerNewsAction,
        urlFetcherAction,
    ],
};

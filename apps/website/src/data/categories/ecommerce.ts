// Import the Action type
import { Action } from '../types/action';
import { ActionCategory } from '../types/ActionCategory';

// Define the E-Commerce actions
const orderManagementAction: Action = {
    id: 'order-management',
    name: 'Manage Orders',
    description:
        'Process and manage orders from Shopify, WooCommerce and other platforms',
    longDescription:
        'Automate order processing, fulfillment, and management across various e-commerce platforms.',
    iconName: 'ShoppingCart',
    benefits: [
        'Streamlined order processing',
        'Automated fulfillment',
        'Order status tracking',
        'Customer communication',
    ],
    useCases: [
        'E-commerce operations',
        'Order fulfillment',
        'Customer service',
        'Sales management',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const inventoryManagementAction: Action = {
    id: 'inventory-management',
    name: 'Update Inventory Levels',
    description:
        'Automate inventory tracking and updates across sales channels',
    longDescription:
        'Monitor, update, and synchronize inventory levels across multiple e-commerce platforms and warehouses.',
    iconName: 'Package',
    benefits: [
        'Real-time inventory tracking',
        'Stock level automation',
        'Multi-channel synchronization',
        'Inventory forecasting',
    ],
    useCases: [
        'Stock management',
        'Inventory optimization',
        'Supply chain automation',
        'Product availability',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const productListingAction: Action = {
    id: 'product-listing',
    name: 'Automate Product Listings',
    description: 'Create and update product listings across multiple platforms',
    longDescription:
        'Automate the creation, updating, and management of product listings across various e-commerce marketplaces.',
    iconName: 'Tag',
    benefits: [
        'Consistent product information',
        'Multi-channel listing',
        'Bulk product updates',
        'SEO optimization',
    ],
    useCases: [
        'Product catalog management',
        'Marketplace integration',
        'Product information management',
        'E-commerce expansion',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

const customerReviewAction: Action = {
    id: 'customer-review',
    name: 'Collect Customer Reviews',
    description: 'Automate review collection and management from customers',
    longDescription:
        'Gather, manage, and respond to customer reviews and feedback across various platforms and marketplaces.',
    iconName: 'Star',
    benefits: [
        'Automated review collection',
        'Reputation management',
        'Customer feedback analysis',
        'Social proof generation',
    ],
    useCases: [
        'Product improvement',
        'Customer satisfaction',
        'Marketing testimonials',
        'Trust building',
    ],
    implementation: 'Model Context Protocol',
    source: 'Community Implementation',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
};

// Create the E-Commerce category
export const ecommerceCategory: ActionCategory = {
    id: 'ecommerce',
    name: 'E-Commerce',
    iconName: 'ShoppingCart',
    description: 'Automate online sales, inventory, and customer interactions',
    actions: [
        orderManagementAction,
        inventoryManagementAction,
        productListingAction,
        customerReviewAction,
    ],
};

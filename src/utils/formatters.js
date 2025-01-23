// src/utils/formatters.js

/**
 * Formats a number as currency.
 * @param {number} amount - The amount to format.
 * @param {string} currency - The currency symbol to use.
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount, currency = 'ريال') {
    return new Intl.NumberFormat('ar-SA', {
        style: 'currency',
        currency: 'SAR',
    }).format(amount);
}

/**
 * Formats a date to a readable string.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date) {
    return new Intl.DateTimeFormat('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
}

/**
 * Formats a percentage value.
 * @param {number} value - The percentage value to format.
 * @returns {string} - The formatted percentage string.
 */
export function formatPercentage(value) {
    return `${value.toFixed(2)}%`;
}
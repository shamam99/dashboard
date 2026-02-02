/**
 * File: tables.js
 * Purpose: Minimal helpers for tables (sorting/paging later)
 */
export const readTableJson = async (url) => {
    const res = await fetch(url);
    return res.ok ? res.json() : [];
  };
  
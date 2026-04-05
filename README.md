# Finance Dashboard

A simple and interactive personal finance dashboard built with React, Tailwind CSS, and Recharts.

---

## Tech Stack

React
Tailwind CSS
React Router DOM
Recharts
Context API

---

## Implementation Details
🔹 Project Setup
Project initialized using Vite
Folder structure organized for scalability
🔹 Layout & Navigation
Created DashboardPage as main layout
Integrated Sidebar + Header
Used React Router for navigation between:
Overview
Transactions
Insights
🔹 Role Switcher
Implemented role switching (Viewer / Admin) inside Header
Role state managed using Context API
🔹 Icons
Used Font Awesome CDN for icons:
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>


## Getting Started

## Features

### 1. Dashboard Overview
- Summary cards showing Total Balance, Income, Expenses
- Line chart — monthly Income vs Expense trend
- Pie chart — expense breakdown by category with percentages

### 2. Transactions
- Table with Date, Category, Type, Amount
- Search by category
- Filter by type (Income / Expense)
- Color coded — green for income, red for expense
- Admin role can add new transactions

### 3. Insights
- Top spending category with progress bars
- Savings rate with visual progress indicator
- Income vs Expense summary


### 4. Role Based UI (RBAC)
- Two roles — **Viewer** and **Admin**
- Viewer — read only access
- Admin — can add new transactions
- Switch roles using the dropdown in the header


### 5. State Management
- React Context API used for global state
- Transactions, role, computed values (balance, income, expense) all managed in `Appcontext.jsx`


# Finance Dashboard

A simple and interactive personal finance dashboard built with React, Tailwind CSS, and Recharts.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | UI framework & build tool |
| React Router v6 | Client-side navigation |
| Tailwind CSS | Styling |
| Recharts | Charts and visualizations |
| Context API | Global state management |

---

## Project Structure

## Getting Started

## Features

### 1. Dashboard Overview
- Summary cards showing Total Balance, Income, Expenses
- Line chart — monthly Income vs Expense trend
- Pie chart — expense breakdown by category with percentages

### 2. Transactions
- Table with Date, Description, Category, Type, Amount
- Search by description or category
- Filter by type (Income / Expense)
- Color coded — green for income, red for expense
- Admin role can add new transactions via modal

### 3. Insights
- Top spending category with progress bars
- Savings rate with visual progress indicator
- Income vs Expense summary
- Monthly net savings bar chart

### 4. Role Based UI (RBAC)
- Two roles — **Viewer** and **Admin**
- Viewer — read only access
- Admin — can add new transactions
- Switch roles using the dropdown in the header
- No backend required — simulated on frontend

### 5. State Management
- React Context API used for global state
- Transactions, role, computed values (balance, income, expense) all managed in `Appcontext.jsx`


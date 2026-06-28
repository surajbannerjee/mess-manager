# PROJECT NAME

Mess Manager (Production Ready)

---

# PROJECT GOAL

Build a modern production-ready Mess Management System using:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Row Level Security (RLS)
- GitHub
- Vercel Deployment

The project should be scalable and production quality.

---

# PROJECT OWNER

GitHub:
https://github.com/surajbannerjee/mess-manager

Developer:
Suraj Banerjee

---

# CURRENT STATUS

## COMPLETED

### Project Setup

✔ Next.js 15 created
✔ TypeScript enabled
✔ Tailwind installed
✔ App Router
✔ Git initialized
✔ GitHub repository connected
✔ Initial commit pushed

Project Folder

D:\Development\mess-manager

---

## GitHub

Repository

https://github.com/surajbannerjee/mess-manager

Remote connected

origin

main branch pushed

---

## Supabase

Project Created

Project Name

mess-manager

Region

Singapore

Supabase JS installed

Environment configured

client.ts created

server.ts created

.env.local configured

---

## DATABASE DESIGN COMPLETED

Tables

profiles

messes

mess_members

expense_categories

meals

expenses

payments

---

## ENUMS

mess_status

ACTIVE

ARCHIVED

member_role

ADMIN

MANAGER

MEMBER

member_status

ACTIVE

LEFT

split_type_enum

EQUAL

MANUAL

MEAL_WISE

---

## TABLE RELATIONSHIP

auth.users

↓

profiles

↓

messes

↓

mess_members

↓

meals

expenses

payments

---

## Profiles

Stores user profile.

Columns

id

full_name

phone

avatar_url

timestamps

---

## Messes

Stores mess information.

Columns

id

name

description

status

created_by

timestamps

---

## Mess Members

Stores members of a mess.

Columns

mess_id

profile_id

role

status

security_deposit

joined_at

left_at

timestamps

---

## Expense Categories

Stores categories like

Food

Gas

Internet

Vegetables

Milk

Others

---

## Meals

Stores daily meal entries.

Columns

mess_id

profile_id

meal_date

day_meal

night_meal

day_guest

night_guest

timestamps

---

## Expenses

Stores expenses.

Columns

mess_id

category_id

paid_by

amount

description

bill_image_url

expense_date

split_type

timestamps

---

## Payments

Stores settlements.

Columns

mess_id

sender_id

receiver_id

amount

payment_date

is_approved

timestamps

---

## SECURITY

RLS Enabled

Policies created

Auto profile trigger created

handle_new_user()

trigger

on_auth_user_created

---

# VERIFIED

Tables exist

profiles

messes

mess_members

expense_categories

meals

expenses

payments

Everything verified successfully.

---

# CURRENT FILE STRUCTURE

Next.js default structure

Need to organize

app/

components/

lib/

hooks/

providers/

types/

services/

utils/

constants/

middleware.ts

---

# NEXT TASKS

AUTHENTICATION

Signup

Login

Google Login

Logout

Forgot Password

Protected Routes

Middleware

Profile Auto Creation

Session Handling

Dashboard

Create Mess

Join Mess

Invite Members

Member List

Meal Module

Daily Meal Entry

Monthly Meal Report

Expense Module

Add Expense

Upload Bill

Categories

Split Expenses

Payment Module

Settlement

Balance Sheet

Reports

Monthly Summary

Charts

Admin Panel

Settings

Profile

Notifications

Dark Mode

Deployment

---

# FUTURE FEATURES

PWA

Offline Mode

QR Join Mess

WhatsApp Reminder

Email Notifications

Mobile App

React Native

Push Notifications

Receipt OCR

AI Expense Categorization

---

# CODING RULES

Always use

TypeScript

Server Components when possible

Client Components only when needed

Server Actions preferred

No any type

Strict typing

Reusable components

Folder-based architecture

Never duplicate code

Always use Supabase best practices

Use production-quality code

No shortcuts

Responsive UI

Clean commits

---

# DEVELOPMENT STYLE

Act as a Senior Full Stack Engineer.

Explain every step before coding.

Do not skip architecture decisions.

Prefer scalability over quick hacks.

Follow production best practices.

Whenever creating a new feature:

1. Explain architecture.

2. Show folder structure.

3. Explain why.

4. Then generate code.

Never rush.

Never overwrite existing code without explaining.

Always keep project updated.

<!-- =========================================================================== -->
You are continuing an existing production-level project.

Read the entire project context carefully.

Do NOT restart the project.

Do NOT change architecture.

Continue from the current milestone only.

Maintain production quality.

Before writing any code, first explain what has already been completed and what the next logical task is.
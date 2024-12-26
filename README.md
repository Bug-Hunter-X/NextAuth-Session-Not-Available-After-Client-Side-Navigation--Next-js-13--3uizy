# NextAuth Session Not Available After Client-Side Navigation

This repository demonstrates a bug where NextAuth session data is not accessible after client-side navigation in a Next.js 13 application.  The session is correctly fetched on the initial page load, but fails when navigating between pages using Next/Link or other client-side routing methods.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Navigate to `/` (Welcome page).
5. Click the link to navigate to `/about` (About page).
6. Observe that, the about page will initially render without any session data, and then will re-render with session data.  This is the buggy behavior. On the first render, it should immediately display the user's name and the session data.

## Expected Behavior

The `/about` page should immediately display the user's name and session data after client-side navigation from the `/` page.

## Actual Behavior

The `/about` page renders initially without session data, resulting in a blank page or an error. Then after the page re-renders the session data is available.

## Possible Causes

The session check might be occurring too early in the client-side rendering process, before the session data has been fully hydrated.
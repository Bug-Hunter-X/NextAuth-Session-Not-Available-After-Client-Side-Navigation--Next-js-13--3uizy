```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import {useEffect, useState} from 'react';

export default async function About() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const session = await unstable_getServerSession(authOptions);
      setSession(session);
    };
    getSession();
  }, []);

  if (!session) {
    return (
      <div>
        <h1>Loading session...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
}
```
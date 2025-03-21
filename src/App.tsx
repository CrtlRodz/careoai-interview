import React, { useState } from 'react';
import './App.css';

import SkylarImg from './assets/images/SkylarImg.png';
import AlfredoImg from './assets/images/AlfredoImg.png';
import JamesImg from './assets/images/JamesImg.png';
import Card from './components/Card';
import { PlusIcon } from './assets/icons/icons';

// Define the User interface to ensure consistent data structure throughout the app
export interface User {
  name: string;
  position: string;
  image: string;
  message: number;
  attachments: number;
}

const initialUsers: User[] = [
  {
    name: "Skylar Calzoni",
    position: "Nurse, Manchester",
    image: SkylarImg,
    message: 3,
    attachments: 1,
  },
  {
    name: "Alfredo Gouse",
    position: "Nurse, Watford",
    image: AlfredoImg,
    message: 1,
    attachments: 0,
  },
  {
    name: "James Carder",
    position: "Nurse, Milton Keynes",
    image: JamesImg,
    message: 0,
    attachments: 2,
  }
];

/**
 * App.tsx
 *
 * This is the main entry point for the Caeroai React project. The component
 * demonstrates the use of React functional components, hooks (useState), and
 * a modular architecture for a clean and scalable codebase.
 *
 * Key Features:
 * - Imports local assets such as images and icons.
 * - Defines a User interface to standardize user data.
 * - Initializes state with a list of users.
 * - Renders a header with a dynamic count of users.
 * - Renders a list of Card components, each displaying user details.
 */


const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  return (
    <div className="app-container">
      {/* Header section */}
      <header className="heading">
        <div className="heading-text">
          {/* Display the header text along with a dynamic user count */}
          Put Forward <span className="count" data-testid="user-count">{users.length}</span>
        </div>
        <PlusIcon />
      </header>

      {/* Card list section */}
      <section className="card-list">
        {users.map(user => (
          <Card key={user.name} user={user} />
        ))}
      </section>
    </div>
  );
};

export default App;

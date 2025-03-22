import React, { useState } from 'react';
import './App.css';

import SkylarImg from './assets/images/SkylarImg.png';
import AlfredoImg from './assets/images/AlfredoImg.png';
import JamesImg from './assets/images/JamesImg.png';
import Card from './components/Card';
import { PlusIcon } from './assets/icons/icons';


export interface User {
  name: string;
  position: string;
  image: string;
  message: number;
  attachments: number;
}

const initialUsers: User[] = [
  { name: "Skylar Calzoni", position: "Nurse, Manchester", image: SkylarImg, message: 3, attachments: 1 },
  { name: "Alfredo Gouse", position: "Nurse, Watford", image: AlfredoImg, message: 1, attachments: 0 },
  { name: "James Carder", position: "Nurse, Milton Keynes", image: JamesImg, message: 0, attachments: 2 }
];

const App: React.FC = () => {
  const [users] = useState<User[]>(initialUsers);


  return (
    <div className={`app-container`}>
      <div className="heading">
        <div className="heading-text">
          Put Forward <span className="count" data-testid="user-count">{users.length}</span>
        </div>
        <div className="icons-container">
          <PlusIcon />
        </div>
      </div>
      <div className="card-list">
        {users.map(user => (
          <Card key={user.name} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;

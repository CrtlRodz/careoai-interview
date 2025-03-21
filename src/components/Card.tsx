import React from 'react';
import '../styles/Card.css';
import { AttchCircleIcon, MenuIcon, MessageIcon } from '../assets/icons/icons';
import { User } from '../App';

type CardProps = {
  user: User;
};

/**
 * Card.tsx
 *
 * This component renders a card that displays user details including an optional image,
 * the user's name, position, and icons with counts for messages and attachments.
 * It also includes a menu icon on the right side.
 *
 * The component receives a `user` object as a prop which adheres to the CardProps type.
 * It uses destructuring to extract the properties from the user object.
 */

const Card: React.FC<CardProps> = ({ user }) => {
  const { name, position, image, message, attachments } = user;

  return (
    <div className="card">
         {/* Header Section: Displays image , name and postion */}
      <div className="card-header">
        <div className="card-info">
            <img src={image} alt={name} className="card-img" />
          <div className="card-text">
            <h3 className="card-title">{name}</h3>
            <p className="card-position">{position}</p>
          </div>
        </div>
      </div>

      {/* Icon Section: Displays message and attachment counts, and a menu icon */}
      <div className="card-icons">
        <div className="left-icons">
          <div className="icon-with-count">
            <MessageIcon />
            <span className="icon-count">{message}</span>
          </div>
          <div className="icon-with-count">
            <AttchCircleIcon />
            <span className="icon-count">{attachments}</span>
          </div>
        </div>
        <div className="right-icon" data-testid="menu-icon-container">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;

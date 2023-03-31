import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card({ title, url, description }) {
  return (
    <div className='card'>
      <div className='image'>
        <img src='#' />
      </div>
      <div className='details'>
        <div className='center'>
          <h1>{title}</h1>
          <p>{description}</p>
          <ul>
            <li>
              <a href={url}>
                Continue to App  <FontAwesomeIcon icon={faArrowRight}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;

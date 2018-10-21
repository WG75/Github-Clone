// @flow

import React from 'react';
import PsuedoElement from '../PsuedoElemnt';

const PsuedoUser = ({ transparent }: { transparent: boolean }) => (
  <li className={`user ${transparent ? 'user--is-transparent' : ''}`}>
    <div className="user__info">
      <PsuedoElement width={150} height={150} borderRadius={50} />
      <PsuedoElement className="user__tag" width={50} height={20} borderRadius={3} />
    </div>

    <div className="user__details">
      <PsuedoElement width={120} height={20} borderRadius={3} />
      <PsuedoElement width={120} height={20} borderRadius={3} />
      <PsuedoElement width={120} height={20} borderRadius={3} />
    </div>
  </li>
);

export default PsuedoUser;

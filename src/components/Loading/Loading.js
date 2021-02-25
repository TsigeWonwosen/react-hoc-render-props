import React from 'react';
import ReactLoading from 'react-loading';

import { Section, Prop, list } from './generic';

const Loading = () => (
  <Section>
    <ReactLoading type={list[1].prop} color="#0b7cfa" height="30%" width="5%" />
    <Prop>{list[0].name}</Prop>
  </Section>
);

export default Loading;

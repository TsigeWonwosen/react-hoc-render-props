import React from 'react';
import ReactLoading from 'react-loading';

import { Section, Prop, list } from './generic';

const Loading = () => (
  <Section>
    <ReactLoading type={list[0].prop} color="#fff" />
    <Prop>{list[0].name}</Prop>
  </Section>
);

export default Loading;

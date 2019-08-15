import React, { Component } from 'react';

import ExamTabNavUI from '../components/examTabNav/ExamTabNav'
import TestItem from '../components/testItem/TestItem'

class Three extends Component {
  render() {
    return (
      <>
        <ExamTabNavUI></ExamTabNavUI>
        <TestItem></TestItem>
      </>
    );
  }
}

export default Three;
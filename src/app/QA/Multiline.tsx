/*
Copyright IBM Corporation 2020

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class Multiline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: props.problem
    };
    this.handleTextAreaChange = value => {
      var problem = this.state.problem
      problem.solution.answer = [value];
      this.props.changeSolution(problem);
      this.setState({problem:problem})
    };
    this.handleTextInputChange(props.problem.solution.default[0]);
  }

  render() {
    const { problem } = this.state;

    return (
      <div>
      <span id={problem.id}>
        {problem.description}
      </span>
      <TextArea defaultValue={problem.solution.default} value={problem.solution.answer} onChange={this.handleTextAreaChange} aria-label="textarea" />
      <text>[Hint: {problem.context}] (Default: {problem.solution.default})</text>
      </div>
      );
  }
}

export { Multiline }

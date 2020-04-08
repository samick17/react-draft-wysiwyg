/* @flow */

import React from 'react';
import { Editor } from '../../../src';

const renderHeader = () => {
	return <div>header</div>
}

// TODO customized header
const Basic = () => (<div className="rdw-storybook-root">
  <Editor
    toolbarClassName="rdw-storybook-toolbar"
    wrapperClassName="rdw-storybook-wrapper"
    editorClassName="rdw-storybook-editor"
    renderHeader={renderHeader}
  />
</div>);

export default Basic;

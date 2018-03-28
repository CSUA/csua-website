import * as React from 'react';

import LazyLoad from 'react-lazy-load';

import {Row, Col} from 'yui-md/lib';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';

import _PaperBorder from './_PaperBorder';

class ComputingResources extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'computing-resources-page'}>
        <_PaperBorder/>
        <h3 className={'centered page-title'}>Computing Resources</h3>
	<p className={'centered header'}>Desktop Machines&emsp;·&emsp;SSH
	  Access&emsp;·&emsp;Web Hosting&emsp;·&emsp;GPU Computing</p>
	<p className={'centered subheader'}>CSUA provides computing resources
	  to our members. A CSUA account is required to log in and use the
	  machines. Ask an officer about setting up an account. Questions about
	  computing resources should be directed to root@csua.berkeley.edu</p>
        <br/>
	<Card>
	  <CardTextArea>
	    <b>SSH access</b>
	    <p>soda.berkeley.edu</p>
	    <b>Web hosting</b>
	    <p>Place .html files in your ~/public_html folder and they will be
	      public at soda.berkeley.edu/~$USER</p>
	  </CardTextArea>
	</Card>
	<Card>
	  <CardTextArea>
	    <b>Desktop Machines</b>
	    <p>We have high-quality desktop machines for you to use. Please
	      note that the office rules remain: please respect office and
	      office equipment. Please do not eat or drink over the computing
	      equipment.</p>
	    <ul>
	      <li>Boba</li>
	      <li>Mead</li>
	      <li>Sake</li>
	      <li>Scotch</li>
	      <li>Soju</li>
	      <li>Vodka</li>
	    </ul>
	  </CardTextArea>
	</Card>
	<Card>
	  <CardTextArea>
	    <b>GPU Computing on Latte</b>
	    <p>Thanks to donations from NVIDIA, CSUA has a GPU server available
	      for public use. It features 8 NVIDIA Tesla P100 datacenter-class
	      GPUs.</p>
	    <p><a href={'https://github.com/csua/slurm-docker-cluster'}>Read
		more about how to access Latte.</a></p>
	  </CardTextArea>
	</Card>
      </div>
    );
  }
}

export default ComputingResources;
export {ComputingResources};

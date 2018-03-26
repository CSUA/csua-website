import * as React from 'react';

import LazyLoad from 'react-lazy-load';

import {Row, Col} from 'yui-md/lib';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';

class Sp18 extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'wrapper'}>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Computing Resources</h3>
          <p className={'centered header'}>Provided to members of the CSUA</p>
          <p className={'centered subheader'}>Questions? Email root@csua.berkeley.edu</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <Row>
            <Card>
              <CardTextArea>
                <div>
                  <div className="headers">
                    Desktop Machines
                  </div>
                  <div className="text">
                    <ul>
                      <li>Boba</li>
                      <li>Mead</li>
                      <li>Sake</li>
                      <li>Scotch</li>
                      <li>Soju</li>
                      <li>Vodka</li>
                    </ul>
                  </div>
                  Beer
                </div>
                <div>
                  <div className="headers">
                    SSH access
                  </div>
                  <div className="text">
                  </div>
                </div>
                <div>
                  <div className="headers">
                    Schedule:
                  </div>
                  <div className="text">
                  </div>
                </div>
              </CardTextArea>
            </Card>
          </Row>
        </div>
      </div>
    );
  }
}

export default Sp18;
export {Sp18};

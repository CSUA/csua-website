import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {Row, Col, Divider} from 'yui-md/lib';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import LazyLoad from 'react-lazy-load';

import pb from 'static/data/pb';
/*
  Props:
    - pb <array>: see static/data/pb for structure.
*/
class _PolitburoCreator extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  calcPolitburoComponents(props) {
    let pb = props.pb;
    let pbComponents = [];
    for (var i in pb) {
      let pbMember = pb[i];
      pbComponents.push(
        <Card key={i}>
          <CardImageArea xs={12} md={6} lg={5}>
            <LazyLoad debounce={false} throttle={50}>
              <img src={pbMember.img}/>
            </LazyLoad>
          </CardImageArea>
          <CardTextArea xs={12} md={6} lg={7}>
            <p className={'header'}>{pbMember.role}</p>
            <p className={'name subheader'}>{pbMember.name}</p>
            <p className={'email subheader'}>{pbMember.email}</p>
            <Divider horizontal margin/>
            <p>{pbMember.description}</p>
            <p>{pbMember.pitch}</p>
          </CardTextArea>
        </Card>);
    }
    return pbComponents;
  }

  render() {
    return (
      <div>
        {this.calcPolitburoComponents(this.props)}
      </div>
    );
  }
}

_PolitburoCreator.defaultProps = {
  pb: pb
};

_PolitburoCreator = Guac(_PolitburoCreator);

export default _PolitburoCreator
export {_PolitburoCreator};

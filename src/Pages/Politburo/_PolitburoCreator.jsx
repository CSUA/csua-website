import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {Row, Col, Divider} from 'yui-md/lib';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import LazyLoad from 'react-lazy-load';

import pb from 'static/data/pb';
import defaultImg from 'static/images/officers/cardigan.jpg';
/*
  Props:
    - pb <array>: see static/data/pb for structure.
*/
class _PolitburoCreator extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  calcPolitburoComponents(pb, remote) {
    let pbComponents = [];
    for (var i in pb) {
      let pbMember = pb[i];
      let name = remote[pbMember.position] ?
        remote[pbMember.position].name : 'Phillip E. Nunez';
      let firstName = name.split(' ')[0];
      let img = remote[pbMember.position] ?
        remote[pbMember.position].img : defaultImg
      pbComponents.push(
        <Card key={i}>
          <CardImageArea xs={12} md={6} lg={5}>
            <LazyLoad debounce={false} throttle={50}>
              <img src={img}/>
            </LazyLoad>
          </CardImageArea>
          <CardTextArea xs={12} md={6} lg={7}>
            <p className={'header'}>{pbMember.title}</p>
            <p className={'name subheader'}>{name}</p>
            <p className={'email subheader'}>{pbMember.position}@csua.berkeley.edu</p>
            <Divider horizontal margin/>
            <p>{pbMember.description}</p>
            <p>{pbMember.pitch.replace('[name]', firstName)}</p>
          </CardTextArea>
        </Card>);
    }
    return pbComponents;
  }

  render() {
    return (
      <div>
        {this.calcPolitburoComponents(this.props.pb, this.props.remote)}
      </div>
    );
  }
}

_PolitburoCreator.defaultProps = {
  pb: pb,
  remote: {}
};

_PolitburoCreator = Guac(_PolitburoCreator);

export default _PolitburoCreator
export {_PolitburoCreator};

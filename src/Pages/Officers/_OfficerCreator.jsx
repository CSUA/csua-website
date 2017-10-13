import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {Row, Col, Divider} from 'yui-md/lib';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import LazyLoad from 'react-lazy-load';

//import officerData from 'static/data/officers';
/*
  Props:
    - officers <array<object>>: see static/data/officers for structure.
*/
class _OfficerCreator extends React.Component {
  constructor(props) {
    super(props);
    this.bindAllMethods();
  }

  calcOfficerComponents(officers) {
    let officerComponents = [];
    for (var i in officers) {
      let officer = officers[i];
      officerComponents.push(
        <Col key={i} xs={6} lg={4}>
          <Card>
            <CardImageArea>
              <LazyLoad debounce={false} throttle={50}>
                <img src={officer.img}/>
              </LazyLoad>
            </CardImageArea>
            <CardTextArea>
              <p className={'title'}>{officer.name}</p>
              <p className={'name subheader'}>OH:&nbsp;{officer.hours}</p>
              <Divider horizontal margin/>
              <p>"{officer.quote}"</p>
                {
                  officer.tutorSubjects
                  ?
                  <small>Tutors For:&nbsp;{officer.tutorSubjects}</small>
                  :
                  null
                }
            </CardTextArea>
          </Card>
        </Col>
      );
    }
    return officerComponents;
  }

  render() {
    return (
      <Row>
        {this.calcOfficerComponents(this.props.officers)}
      </Row>
    );
  }
}

// _OfficerCreator.defaultProps = {
//   officers: officerData
// };

_OfficerCreator = Guac(_OfficerCreator);

export default _OfficerCreator
export {_OfficerCreator};

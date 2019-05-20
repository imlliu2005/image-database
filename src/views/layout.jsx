import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import HeaderBar from '../components/headerbar';
import SiderBar from '../components/siderbar';

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
`;

const Flex = styled.div`
  overflow: auto;
  display: flex;
  height: 100%;
`;

const Main = styled.div`
  margin-top: 60px;
  margin-left: 210px;
  flex: 1;
  overflow: hidden;
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <HeaderBar />
        <Flex>
          <SiderBar />
          <Main>{children}</Main>
        </Flex>
      </Wrapper>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
  client: PropTypes.object
};

export default withRouter(Layout);

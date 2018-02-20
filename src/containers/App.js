import {
  compose,
  withHandlers,
  withState,
  lifecycle,
  mapProps
} from 'recompose';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions';

import axios from '../axios';
import language from '../language';

import App from '../components/App';

const mapStateToProps = ({ currentStore }) => ({
  ...currentStore
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(appActions, dispatch)
});

const componentMethods = lifecycle({
  componentDidMount() {
    // redux search
  },
  componentWillMount() {
    const { getPatterns } = this.props;
    getPatterns();
  }
});

const state = withState('isLoaded', 'setLoading', true);

const handlers = withHandlers({
  getPatterns: ({ setTag, setPatterns, searchPatterns, setLoading }) => (
    tag = ''
  ) => {
    setTag(tag);
    setLoading(true);
    axios
      .get('patterns.json')
      .then(({ data }) => {
        setPatterns(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  },
  searchPatterns: ({ searchPatterns }) => val => {
    searchPatterns(val);
  }
});

const replaceProps = mapProps(props => ({
  ...props,
  dict: language[props.language],
  patterns: props.patterns.length
    ? props.patterns
        .filter(item => {
          const searchQuery =
            props.location.search.indexOf('search=') >= 0
              ? props.location.search.split('search=')[1]
              : props.searchQuery;
          return (
            (item.title.hasOwnProperty(props.language) &&
              item.title[props.language].toLowerCase().indexOf(searchQuery) >=
                0) ||
            item.tags.toLowerCase().indexOf(searchQuery) >= 0 ||
            (item.hasOwnProperty('description') &&
              item.description.hasOwnProperty(props.language) &&
              item.description[props.language]
                .toLowerCase()
                .indexOf(searchQuery) >= 0)
          );
        })
        .sort((a, b) => b.priority - a.priority)
    : []
}));

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  handlers,
  state,
  componentMethods,
  replaceProps
)(App);

// @flow

import { connect } from "react-redux";
import Home from "./Home";

const mapDispatchToProps = {};
const mapStateToProps = state => ({ language: state.settings.language });

export default connect(mapStateToProps, mapDispatchToProps)(Home);

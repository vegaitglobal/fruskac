// @flow

import { connect } from "react-redux";
import MenuButton from "./MenuButton";
import { onToggleDrawer } from "../../actions/settings";

const mapDispatchToProps = { onToggleDrawer };
const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);

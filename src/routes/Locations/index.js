// @flow

import { connect } from "react-redux";
import Locations from "./Locations";
import { onNavigate } from "../../actions/navigation";

const mapDispatchToProps = { onNavigate };
const mapStateToProps = state => ({
  filter: state.locations.filter,
  tags:
    state.settings.language == "sr"
      ? state.locations.tagsSr
      : state.locations.tagsEn
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);

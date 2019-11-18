import { connect } from "react-redux";
import HomePatient from "../components/HomePatient";
import {
    setName
} from "../modules/home";

const mapStateToProps = (state) => ({
    name: state.home.name

});

const mapActionCreators = {
    setName
};
export default connect(mapStateToProps, mapActionCreators)(HomePatient);
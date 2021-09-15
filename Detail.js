import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/")
        }
    }
    // componentDidmount()
    //  ↪ class component내에서 render가 실행되기 후에(mount되기전에) 실행
    render() {
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else{
            return null;
            }
        }
    }


export default Detail;
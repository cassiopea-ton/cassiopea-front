import React from "react";
import "./OracleSearchForm.scss";
import RequestButton from "../RequestButton/RequestButton";
import RequestOption from "../RequestOption/RequestOption";

export default class OracleSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(props) {
    this.initClient();
  }


   initClient = () => {
     this.setState(()=>{
      
  })

}
  handleClick() {
    this.setState({
      button: !this.state.button
    });
    console.log(this.state.button);
  }
  render() {



    const {
      buttonStyles = {
        backgroundColor: "#B60002"
      },
      buttonStylesDark = {
        backgroundColor: "#0D0829"
      }
    } = this.state;

    return (
      <div className="providers__search__container">
        <div className="providers__form">
          <form className="form__container">
            <div className="search__article">Provider’s search</div>
            <div className="button__group group__top">
              <RequestOption
                content="Public"
                value="public"
                buttonColor={
                  this.state.button ? buttonStylesDark : buttonStyles
                }
                onClick={this.handleClick}
              />
              <RequestOption
                value="private"
                content="Private"
                onClick={this.handleClick}
                buttonColor={
                  this.state.button ? buttonStyles : buttonStylesDark
                }
              />
            </div>
            <div className="form__row row__top">
              <input
                type="text"
                placeholder="url"
                className=" inp input__left"
              />
              <input
                type="text"
                placeholder="data type"
                className=" inp input__right"
              />
            </div>
            <div className="form__row row__bottom">
              <input
                type="text"
                placeholder="price per call"
                className=" inp input__left"
              />
              <input
                type="text"
                placeholder="valid until"
                className=" inp input__right"
              />
            </div>
            <textarea disabled></textarea>
            <div className="button__group group__top">
              <RequestButton content="Search" to="/howto/consumer" />
              <RequestButton content="Request!" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

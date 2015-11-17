import React, { PropTypes } from 'react';
import classNames from 'classnames';
import money from '../utils/money';

export default class BillSection extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    let iconClass = classNames({
      glyphicon: true,
      ['glyphicon-triangle-right']: !this.state.isOpen,
      ['glyphicon-triangle-bottom']: this.state.isOpen
    });
    return (
      <section className="bill-section">
        <div className="row" onClick={this._onClick}>
          <div className="col-md-6">
            <h2>
              <small>
                <span className={iconClass} aria-hidden="true"></span>
              </small>
              {this.props.title}
            </h2>
          </div>
          <div className="col-md-6 section-total">
            <span className="total">{money(this.props.total)}</span>
          </div>
        </div>
        {this.state.isOpen ? this.props.children : null}
      </section>
    );
  }

  _onClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  }
}

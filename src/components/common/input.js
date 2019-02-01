var React = require('react');

var Input = React.createClass({

        render: function () {
            var wrapperClass = 'form-group';
            if (this.props.error && this.props.error.length > 0) {
                wrapperClass = wrapperClass + ' ' + 'has-error';
            }

            return (
                <div className={wrapperClass}>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type="text"
                           name={this.props.name}
                           className="form-control"
                           id={this.props.name}
                           value={this.props.value}
                           onChange={this.props.onChange}/>
                    <div>{this.props.error}</div>
                </div>
            );
        }
    }
);

module.exports = Input;
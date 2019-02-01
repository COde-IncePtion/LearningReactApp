var React = require('react');
var Input = require('../common/input');

var AddAuthorPage = React.createClass({
        render: function () {
            return (
                <div className='form-layout'>
                    <h1>Manage Author</h1>
                    <form>
                        <Input name='firstName'
                               label='First Name'
                               value={this.props.author.firstName}
                               onChange={this.props.onChange}
                               error={this.props.errors.firstName}/>

                        <Input name='lastName'
                               label='Last Name'
                               value={this.props.author.lastName}
                               onChange={this.props.onChange}
                               error={this.props.errors.lastName}/>

                        <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Submit</button>
                    </form>
                </div>
            );
        }
    }
);

module.exports = AddAuthorPage;


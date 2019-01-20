var React = require('react');

var AddAuthorPage = React.createClass({
        render: function () {
            return (
                <div className='form-layout'>
                    <h1>Manage Author</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" className="form-control" id="firstName"
                                   value={this.props.author.firstName}
                                    onChange={this.props.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" id="lastName"
                                    value={this.props.author.lastName}
                                    onChange={this.props.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            );
        }
    }
);

module.exports = AddAuthorPage;


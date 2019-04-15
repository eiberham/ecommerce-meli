import React from 'react';

class NotFound extends React.Component {
    renderError(show){
        if (show) {
            return (
                <div className="container">
                    <div className="not-found">
                        <span><i className="fa fa-frown fa-4x"></i></span>
                        <p class="title">Ups... Parece que la página no existe</p>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }

    }
    render(){
        return <div className="error-box">{this.renderError(this.props.show)}</div>
    }
}

export default NotFound;
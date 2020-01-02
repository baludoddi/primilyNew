import React from "react";
import "materialize-css/sass/materialize.scss";

export class FAQPageTemplate extends React.Component {

    constructor(props) {
        super(props);
        let count = 0;
        this.state = {iconToggle: true, items: []};
        for(let i of this.props.faq.faq.questionsAndAns) {
            count++;
            this.state.items.push({i: count, iconToggle: true, item: i});
        }
    }

    handleClick = (e, index) => {
        const { items } = this.state;
        items.filter( item => {
            if(item.iconToggle === false) {
                item.iconToggle = true;
            } 
        })
        items[items.indexOf(e)].iconToggle = !e.iconToggle
        this.setState({items})
      }

      render() {
        const { iconToggle, items } = this.state;
        // console.log(items)
        return (
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title center-align feature-items"><h5>Frequently Asked Questions</h5></span>
                        <ul className="collapsible">
                            {items.map((qanda, index) => (
                                <li key={index}>
                                    <div className="collapsible-header grey-dark" onClick={(index) => this.handleClick(qanda, 'i')}><i className="material-icons"> {qanda.iconToggle ? 'add' : 'remove'}</i>{qanda.item.question}</div>
                                    <div className="collapsible-body grey-light"><span>{qanda.item.answer}</span></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}


export default FAQPageTemplate;


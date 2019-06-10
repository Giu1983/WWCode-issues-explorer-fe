import React from 'react'; 
import './searchbox.css'; 

class searchbox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            issueslist: []
        }
    
    this.handleChange = this.handleChange.bind(this); 

        handleChange(e) {
            let currentList = [];
            let newList = []
            if(e.target.value !== ""){
                currentList = this.props.items;
                newList = currentList.filter(item => {
                    const lc = item.toLowerCase(); 
                    const filter = e.target.value.toLowerCase(); 
                    return lc.includes(filter);
                });
            }else{
                newList = this.props.items; 
            }
        }
        this.setState({
            filtered: newList
        });
    }
    render(){
        return(
            <div className="container">
            <div className="searchbox">Searchbox Women Who Code
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search.." />
            <ul>
                {this.state.issuesList.map(item =>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
            </div>
            </div>

        )
    }
}

export default searchbox; 